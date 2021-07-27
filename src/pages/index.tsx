import Head from "next/head";
import { Header, Registration, WhatIs, QA, Sponsor, ContactUs, Main, Agenda } from "@components/Index";

export default function Home() {
  return (
    <>
      <Head>
        <title>The 5th Stupid Hackathon Thailand</title>
      </Head>
      <Main>
        <Header />

        <Agenda />
        {/*
        <WhatIs />

        <Registration />

        <QA />
        */}

        <Sponsor />

        <ContactUs />
      </Main>
    </>
  );
}
