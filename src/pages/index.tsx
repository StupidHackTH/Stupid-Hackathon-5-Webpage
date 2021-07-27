import Head from "next/head";
import { Header, Registration, WhatIs, QA, Sponsor, ContactUs, Main } from "@components/Index";

export default function Home() {
  return (
    <>
      <Head>
        <title>The 5th Stupid Hackathon Thailand</title>
      </Head>
      <Main>
        <Header />

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
