import Astronaut from "../shared/Astronaut";

const Header = (props) => (
  <>
    <header className="section section__header" id="header-index">
      <div className="section__header__title">
        <h1>Past Projects</h1>
      </div>
      <div className="btn-container">
        <a href="/" className="nes-btn nes-btn__green">
          Back
        </a>
      </div>

      <Astronaut />
    </header>
  </>
);

export default Header;
