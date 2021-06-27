import Head from "next/head";
import Header from "../components/Header.js";
import Registeration from "../components/Registeration.js";
import WhatIs from "../components/WhatIs.js";
import QA from "../components/QA.js";
import Sponsor from "../components/Sponsor.js";
import ContactUs from "../components/ContactUs.js";

export default function Home() {
  return (
    <>
      <div
        className="font-fasys w-screen h-screen text-white fixed overflow-scroll"
        style={{ backgroundImage: "url(bg.png)" }}
      >
        <Header />

        <Registeration />

        <WhatIs />

        <QA />

        <Sponsor />

        <ContactUs />
      </div>
    </>
  );
}
