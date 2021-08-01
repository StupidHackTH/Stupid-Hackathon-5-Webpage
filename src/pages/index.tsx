import Head from "next/head";
import { Header, Registration, WhatIs, QA, Sponsor, ContactUs, Main, Agenda, Submissions, Awards } from "@components/Index";
import { GetStaticProps } from "next";
import initDB from "@helpers/db";
import { HomeComponent, ProjectInfo } from "@types";

const Home: HomeComponent = ({ teams }) => {
  return (
    <>
      <Head>
        <title>The 5th Stupid Hackathon Thailand</title>
      </Head>
      <Main>
        <Header />

        <Agenda variant={1} />

        <Submissions teams={teams} variant={3} />
        {
        /*

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
  submissions?: ProjectInfo[]
}

export const getStaticProps: GetStaticProps = async () => {
	const db = initDB();
	const result = await db.collection('Teams')
    .where("submissions", "!=", null)
		.get()
		.then(async (snapshot) => {
      const res = await snapshot.docs.map(async (team) => await team.data())
			return { ...res };
		})
		.catch((error) => {
			return { error: `something went wrong: ${error}` };
		});
	
	if (result.hasOwnProperty("error")) {
		return {
			notFound: true,
			revalidate: 1
		}
	}

  let teams = await Object.values(result);

  teams = await teams.map(async (t: TeamRes) => {
    const team = await t;

    team.projects = team.submissions;
    delete team.submissions;
    team.members = await team.members.map(async (m: string) => {
      const res = await db.collection('Users')
        .doc(m)
        .get()
        .then(async (snapshot)=> {
          if (!snapshot) return;
          else return await snapshot.data();
        })
        .catch((e) => console.error(e))
        
      return res?.name;
    })

    team.projects = team.projects.slice(0, 1); // only get the first submission

    team.members = await Promise.all(team.members);
    team.members = team.members.filter(x => x);

    delete team.admins;
    return team;
  });

  const ret = await Promise.all(teams)

	return {
		props: { teams: await ret },
		revalidate: 1 * 5
	}
};

export default Home;