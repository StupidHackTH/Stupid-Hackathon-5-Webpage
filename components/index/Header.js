import BlockLayout from "../shared/BlockLayout";
import Astronaut from "../shared/Astronaut";

const Header = (props) => (
  <>
    <header className="container section" id="header">
      <div id="heading-title">
        <h1>
          <p>The 5th</p>
          <p>StuPId H@CK</p>
          <p>THaIL@Nd</p>
        </h1>
      </div>
      <div className="btn-container">
        <a href="#info" className="nes-btn nes-btn__green">M0re 1nFo</a>
        <a href="#register" className="nes-btn nes-btn__green">Regi$teR</a>
        <a href="#contact" className="nes-btn nes-btn__green">C0Nt4cT</a>
      </div>

      <Astronaut />
    </header>
  </>
);

export default Header;
