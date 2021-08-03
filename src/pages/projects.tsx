import { FunctionComponent } from 'react'
import { BlockLayout, Project } from '@components/Shared'
import {
    Project as ProjectType,
    HomeComponent,
    Team,
    ProjectInfo
} from '@types'
import Head from 'next/head'
import Link from 'next/link'
import initDB from '@helpers/db'
import { GetStaticProps } from 'next'
import Presentations from "@helpers/presentations";

const Projects: HomeComponent = ({ submissions }) => {
    if (submissions.length === 0)
        return (
            <BlockLayout
                variant={1}
                header="Projects"
                id="projects"
            ></BlockLayout>
        )

    const _submissions = submissions.map((t) => (
        <Project
            members={t.members}
            key={t.name}
            name={t.name}
            color={t.color}
            description={t.description}
            teamname={t.teamname}
            link={t.link}
            hidden={t.hidden}
        />
    ))

    return (
        <>
            <Head>
                <title>The 5th Stupid Hackathon Thailand</title>
            </Head>
            <BlockLayout variant={1} header="Projects" id="projects">
                <div className="back">
                    <Link href="/">
                        <a className="btn -purple">back to main</a>
                    </Link>
                </div>
                {_submissions}
            </BlockLayout>
        </>
    )
}

type TeamRes = {
    color: string
    members: string[]
    name: string
    submissions?: ProjectInfo[]
}

export const getStaticProps: GetStaticProps = async () => {
    let ret: ProjectType[] = []
    Presentations.forEach((t) => {
      if (!t.submissions) return;
      // if (t.submissions[0].hidden) return; // filter all hidden teams
      t.submissions.forEach((s) => {
        ret.push({
          teamname: t.name,
          color: t.color,
          name: s.name,
          description: s.description,
          hidden: s.hidden ?? false,
          members: t.members,
          link: s.link,
          id: t.key
        })
      })
    })

  return {
    props: { submissions: [...ret] },
  }

    // const db = initDB()
    // const result = await db
    //     .collection('Teams')
    //     .where('submissions', '!=', null)
    //     .get()
    //     .then(async (snapshot) => {
    //         const res = await snapshot.docs.map(
    //             async (team) => await team.data()
    //         )
    //         return { ...res }
    //     })
    //     .catch((error) => {
    //         return { error: `something went wrong: ${error}` }
    //     })
// 
    // if (result.hasOwnProperty('error')) {
    //     return {
    //         notFound: true,
    //         revalidate: 1
    //     }
    // }
// 
    // let teams = await Object.values(result)
// 
    // teams = await teams.map(async (t: TeamRes) => {
    //     const team = await t
// 
    //     team.projects = team.submissions
    //     delete team.submissions
    //     team.members = await team.members.map(async (m: string) => {
    //         const res = await db
    //             .collection('Users')
    //             .doc(m)
    //             .get()
    //             .then(async (snapshot) => {
    //                 if (!snapshot) return
    //                 else return await snapshot.data()
    //             })
    //             .catch((e) => console.error(e))
// 
    //         return res.name
    //     })
// 
    //     team.members = await Promise.all(team.members)
// 
    //     delete team.admins
    //     return team
    // })
// 
    // const ret = await Promise.all(teams)
// 
    // return {
    //     props: { teams: await ret },
    //     revalidate: 1 * 5
    // }
}

export default Projects
