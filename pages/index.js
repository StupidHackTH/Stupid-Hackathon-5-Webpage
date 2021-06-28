import Head from "next/head";
import Header from "../components/index/Header.js";
import Registeration from "../components/index/Registration.js";
import WhatIs from "../components/index/WhatIs.js";
import QA from "../components/index/QA.js";
import Sponsor from "../components/index/Sponsor.js";
import ContactUs from "../components/index/ContactUs.js";

export default function Home() {
  return (
    <>
      <main
        className="font-fasys w-screen h-screen text-white overflow-scroll"
        id="wrapper"
      >
        <Header />

        <Registeration />

        <WhatIs />

        <QA />

        <Sponsor />

        <ContactUs />
      </main>
    </>
  );
}
