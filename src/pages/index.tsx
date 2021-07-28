import Head from "next/head";
import { Header, Registration, WhatIs, QA, Sponsor, ContactUs, Main, Agenda, Projects } from "@components/Index";
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

        <Agenda />

        <Projects teams={teams} />
        {
        /*

        <WhatIs />
        <Registration />

        <QA />
        */
        }

        <Sponsor />

        <ContactUs />
      </Main>
    </>
  );
};

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

export default Home;