import Head from "next/head";
import Header from "../components/index/Header.js";
import Registeration from "../components/index/Registration.js";
import WhatIs from "../components/index/WhatIs.js";
import QA from "../components/index/QA.js";
import Sponsor from "../components/index/Sponsor.js";
import ContactUs from "../components/index/ContactUs.js";

// TODO generate boxes using for loop
// TODO put box into a separate component
// TODO Navbar

export default function Home() {
  return (
    <>
      <main
        className="wrapper wrapper__space  font-fasys"
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
