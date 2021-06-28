import BlockLayout from "../BlockLayout";
import Astronaut from "../Astronaut";

export default (props) => (
  <>
    <header className="container section h-screen max-w-5xl" id="header">
      <div id="heading-title">
        <h1>
          <p>The 5th</p>
          <p>StuPId H@CK</p>
          <p>THaIL@Nd</p>
        </h1>
      </div>
      <div id="btn-links">
        <a href="#register" className="nes-btn btn-green">R3gi$teR</a>
        <a href="#info" className="nes-btn btn-green">M0re 1nFo</a>
        <a href="#contact" className="nes-btn btn-green">C0Nt4cT</a>
      </div>

      <Astronaut />
    </header>
  </>
);
