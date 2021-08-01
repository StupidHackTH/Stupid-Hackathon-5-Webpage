import { BlockLayout } from '@components/Shared'
import { App as VoteApp } from '@components/Vote';
import { Project as ProjectType, HomeComponent, Team, ProjectInfo } from '@types'
import Head from 'next/head'
import Link from 'next/link'
import initDB from '@helpers/db'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getFirebase } from "@helpers/firebase"

const Vote: HomeComponent = ({ teams }) => {
    const [auth, setAuth] = useState(true)
    // const [id,setId] = useState(null)

    // useEffect(() => {
    //     async function check () {
    //         const auth = getFirebase().fire()
    //         auth.onAuthStateChanged((a) => {
    //             console.log(a)
    //         })
    //     }
    //     check()
    // }, [id])

    if (teams.length === 0)
        return <BlockLayout variant={4} header="Vote" id="vote"></BlockLayout>

    if (auth) {
        return (
            <>
                <Head>
                    <title>The 5th Stupid Hackathon Thailand</title>
                </Head>
                <BlockLayout variant={4} header="Vote" id="vote">
                    <VoteApp teams={teams} />
                </BlockLayout>
            </>
        )
    }
    else return <p>Unauthorized</p>
}

type TeamRes = {
    color: string,
    members: string[],
    name: string,
    submissions?: ProjectInfo[]
}

export const getStaticProps: GetStaticProps = async () => {
    const db = initDB()

    const result = await db
        .collection('Presentations')
        .get()
        .then(async (snapshot) => {
            const res = await snapshot.docs.map(
                async (team) => await team.data()
            )
            return { ...res }
        })
        .catch((error) => {
            return { error: `something went wrong: ${error}` }
        })

    if (result.hasOwnProperty('error')) {
        return {
            notFound: true,
            revalidate: 1
        }
    }

    let teams = await Object.values(result)


    teams = await teams.map(async (t: TeamRes) => {
        const team = await t;

        team.project = team.submission
        delete team.submission

        delete team.done
        /*
        team.members = await team.members.map(async (m: string) => {
            const res = await db
                .collection('Users')
                .doc(m)
                .get()
                .then(async (snapshot) => {
                    if (!snapshot) return
                    else return await snapshot.data()
                })
                .catch((e) => console.error(e))

            return res.name
        })

        team.members = await Promise.all(team.members)
        */

        return team
    })

    const ret = await Promise.all(teams)

    return {
        props: { teams: await ret },
        revalidate: 1 * 5
    }
}

export default Vote
