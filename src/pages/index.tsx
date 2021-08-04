import Head from "next/head";
import { Header, Registration, WhatIs, QA, Sponsor, ContactUs, Main, Agenda, Submissions, Awards } from "@components/Index";
import { GetStaticProps } from "next";
import initDB from "@helpers/db";
import { HomeComponent, ProjectInfo, Project as ProjectType } from "@types";
import Presentations from "@helpers/presentations";

const Home: HomeComponent = ({ submissions }) => {
  return (
    <>
      <Head>
        <title>The 5th Stupid Hackathon Thailand</title>
      </Head>
      <Main>
        <Header />


        <Submissions submissions={submissions} variant={3} />
        {
        /*
          
        <Agenda variant={1} />
        <WhatIs variant={1} />
        <Registration variant={2} />

        <QA variant={1} />
        */
        }

        <Awards variant={1} />

        {
        /*
        <Sponsor variant={2} />
        */
        }

        <ContactUs variant={2} />
      </Main>
    </>
  );
};

type TeamRes = {
  color: string,
  members: string[],
  name: string,
  id?: string
  submissions?: ProjectInfo[]
}

export const getStaticProps: GetStaticProps = async () => {
  let ret: ProjectType[] = []
  Presentations.forEach((t) => {
    if (!t.submissions) return;
    if (t.submissions[0].hidden) return; // filter all hidden teams
    ret.push({
      teamname: t.name,
      color: t.color,
      name: t.submissions[0].name,
      description: t.submissions[0].description,
      hidden: t.submissions[0].hidden ?? false,
      members: t.members,
      link: t.submissions[0].link,
      id: t.key
    })
  })

  return {
    props: { submissions: [...ret] },
  }

	// const db = initDB();
	// const result = await db.collection('Teams')
  //   .where("submissions", "!=", null)
	// 	.get()
	// 	.then(async (snapshot) => {
  //     const res = await snapshot.docs.map(async (team) => ({... team.data(), id: team.id}))
	// 		return { ...res };
	// 	})
	// 	.catch((error) => {
	// 		return { error: `something went wrong: ${error}` };
	// 	});
	// 
	// if (result.hasOwnProperty("error")) {
	// 	return {
	// 		notFound: true,
	// 		revalidate: 1
	// 	}
	// }
// 
  // let teams = await Object.values(result);
// 
  // teams = await teams.map(async (t: TeamRes) => {
  //   const team = await t;
// 
  //   team.projects = team.submissions.map((s, i) => ({ ...s, id: team.id + '-' + i }));
  //   delete team.submissions;
  //   team.members = await team.members.map(async (m: string) => {
  //     const res = await db.collection('Users')
  //       .doc(m)
  //       .get()
  //       .then(async (snapshot)=> {
  //         if (!snapshot) return;
  //         else return await snapshot.data();
  //       })
  //       .catch((e) => console.error(e))
  //       
  //     return res?.name;
  //   })
// 
  //   team.projects = team.projects.filter((p, i) => !noLive.includes(team.id + '-' + i));
// 
  //   // Some teams put their primary project as 2nd.
  //   // Luckily, there is only one such team.
  //   team.projects.reverse();
// 
  //   team.members = await Promise.all(team.members);
  //   team.members = team.members.filter(x => x);
// 
  //   delete team.admins;
  //   return team;
  // });
// 
  // const ret = await Promise.all(teams)
// 
	// return {
	// 	props: { teams: [...await ret, ...staffTeams] },
	// 	revalidate: 1 * 5
	// }
};

export default Home;