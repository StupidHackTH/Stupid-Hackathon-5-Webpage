import Head from "next/head";
import { Header, Registration, WhatIs, QA, Sponsor, ContactUs, Main, Agenda, Projects, Awards } from "@components/Index";
import { GetStaticProps } from "next";
import initDB from "@helpers/db";
import { HomeComponent } from "@types";

const Home: HomeComponent = ({ teams }) => {
  return (
    <>
      <Head>
        <title>The 5th Stupid Hackathon Thailand</title>
      </Head>
      <Main>
        <Header />

        <Agenda variant={1} />

        <Projects teams={teams} variant={2} />
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

/*
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const db = initDB();
	const teams = await db.collection('Teams')
		.get()
		.then((snapshot) => {
			if (snapshot.empty) throw new Error();
			else return { ...snapshot.docs.map(team => team.data()) };
		})
		.catch((error) => {
			return { error: `something went wrong: ${error}` };
		});

	if (!teams.hasOwnProperty("error")) {
		return {
			props: { teams },
			revalidate: 1 * 60
		}
	}
	
	return {
		notFound: true,
		revalidate: 1
	}
};
*/

export default Home;