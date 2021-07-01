import Head from "next/head";
import Header from "../components/index/Header.js";
import Registration from "../components/index/Registration.js";
import WhatIs from "../components/index/WhatIs.js";
import QA from "../components/index/QA.js";
import Sponsor from "../components/index/Sponsor.js";
import ContactUs from "../components/index/ContactUs.js";

// TODO Navbar

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
