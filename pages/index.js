import Head from "next/head";
import { useLayoutEffect, useState } from "react";
import Header from "../components/Header.js";
import Registeration from "../components/Registration.js";
import WhatIs from "../components/WhatIs.js";
import QA from "../components/QA.js";
import Sponsor from "../components/Sponsor.js";
import ContactUs from "../components/ContactUs.js";

function Astro() {
  /*
  function handleScroll() {
    console.log("hi")
    const initY = 30;
    const vh = Math.max(doc.clientHeight || 0, window.innerHeight || 0)
    var y = (offset || doc.scrollTop) - (doc.clientTop || 0);

    var astro = document.getElementById("astro")
    var aPos, aScale, aRot;

    var dY = y - initY

    aPos = initY + (0.75 * dY)
    aScale = (vh - (initY + ((0.3) * dY))) / 2 / vh * 100
    aRot = 90 - (vh - (initY + ((0.3) * dY))) / 2 / vh * 180;

    if (aScale < 25) {
      aScale = 25;
      aRot = 90 - (vh - (initY + ((2) * dY))) / 2 / vh * 180;
    }

    astro.style.top = `${aPos}px` * 0.75;
    astro.style.height = `${aScale}%`
    astro.style.transform = `rotate(${aRot}deg)`;
  }
  */

  useLayoutEffect(() => {
    const container = document.getElementById('wrapper');

    const handleScroll = ({ target }) => {
      const initY = 30;
      const doc = document.documentElement;
      const vh = Math.max(doc.clientHeight || 0, window.innerHeight || 0)
      var y = (window.pageYOffset || target.scrollTop) - (doc.clientTop || 0);

      var astro = document.getElementById("astro");
      var aPos, aScale, aRot;

      var dY = y - initY

      aPos = initY + (0.75 * dY)
      aScale = (vh - (initY + ((0.3) * dY))) / 2 / vh * 100
      aRot = 90 - (vh - (initY + ((0.3) * dY))) / 2 / vh * 180;

      if (aScale < 25) {
        aScale = 25;
        aRot = 90 - (vh - (initY + ((2) * dY))) / 2 / vh * 180;
      }

      astro.style.top = `${aPos}px` * 0.75;
      astro.style.height = `${aScale}%`
      astro.style.transform = `rotate(${aRot}deg)`;
    }

    container.addEventListener('scroll', handleScroll, false)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <img src="https://drive.google.com/uc?id=11Un8VFE2LsNPCS0bEW9D3N_J2UqFaQPJ" id="astro" alt="astronaut" />
  );
}

export default function Home() {
  return (
    <>
      <div
        className="font-fasys w-screen h-screen text-white fixed overflow-scroll"
        id="wrapper"
      >
        <Header />

        <Astro />

        <Registeration />

        <WhatIs />

        <QA />

        <Sponsor />

        <ContactUs />
      </div>
    </>
  );
}
