import { useLayoutEffect, useState } from "react";

export default () => {
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