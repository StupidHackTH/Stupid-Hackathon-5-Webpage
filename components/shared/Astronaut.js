import { useEffect } from "react";

const Astronaut = (props) => {
  useEffect(() => {
    const container = window;
    const initX = window.scrollX + astro.getBoundingClientRect().left;
    const initY = 30;

    const handleScroll = ({ target }) => {
      const doc = document.documentElement;
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      const vh = Math.max(doc.clientHeight || 0, window.innerHeight || 0);
      
      var astro = document.getElementById("astro");
      
      const x = window.scrollX + astro.getBoundingClientRect().left;
      const y = window.scrollY + astro.getBoundingClientRect().top;

      // var y = (window.pageYOffset || target.scrollTop) - (doc.clientTop || 0);

      var aPosX, aScale, aRot;
      const dX = x - initX;
      const dY = y - initY;
      
      const aSpeedX = 1020;
      aPosX = Math.abs((vw/ 2) - (((aSpeedX / 1000) * (0.75 * dX)) % vw));

      // scale
      aScale = (vh - (initY + ((0.15) * dY))) / (2 * vh) * 100;
      // rotation
      aRot = 90 - (vh - (initY + ((0.3) * dY))) / (2 * vh) * 180;

      if (aScale < 25) {
        aScale = 25;
        aRot = 90 - (vh - (initY + ((2) * dY))) / 2 / vh * 180;
      }

      astro.style.height = `${aScale}%`;
      // astro.style.transform = `rotate(${aRot}deg) translateX(${aShiftX}px)`;
      astro.style.transform = `rotate(${aRot}deg)`;
      astro.style.left = `${vw-aPosX+25}px`;
    }

    container.addEventListener('scroll', handleScroll, false);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <>
      <img src="/astronaut.png" id="astro" alt="astronaut" />
    </>
  );
}

export default Astronaut;