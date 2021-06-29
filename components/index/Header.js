import Astronaut from "../shared/Astronaut";

const Header = (props) => (
  <>
    <header className="section section__header" id="header-index">
      <div className="section__title-container">
        <h1 className="section__title">The 5th<br />StuPId H@CK<br />THaIL@Nd</h1>
      </div>
      <div className="btn-container">
        <a href="#info" className="nes-btn nes-btn__green">
          M0re 1nFo
        </a>
        <a href="#register" className="nes-btn nes-btn__green">
          Regi$teR
        </a>
        <a href="/projects" className="nes-btn nes-btn__green">
          Pr0jEctS
        </a>
      </div>

      <Astronaut />
    </header>
  </>
);

export default Header;
