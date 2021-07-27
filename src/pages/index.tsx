import Head from "next/head";
import Header from "@components/Index/Header";
import Registration from "@components/Index/Registration";
import WhatIs from "@components/Index/WhatIs";
import QA from "@components/Index/QA";
import Sponsor from "@components/Index/Sponsor";
import ContactUs from "@components/Index/ContactUs";

export default function Home() {
  return (
    <>
      <Head>
        <title>The 5th Stupid Hackathon Thailand</title>
      </Head>
      <main
        className="wrapper wrapper__space"
      >
        <Header />

        <WhatIs />

        <Registration />

        <QA />

        <Sponsor />

        <ContactUs />
      </main>
    </>
  );
}
