import Link from 'next/link'
import Astronaut from '../shared/Astronaut'

const Header = (props) => (
    <>
        <header className="section section__header" id="header-index">
            <div className="section__title-container">
                <h1 className="section__title">
                    The 5th
                    <br />
                    StuPId H@CK
                    <br />
                    THaIL@Nd
                </h1>
            </div>
            <div className="btn-container">
                <a href="#info" className="btn">
                    M0re 1nFo
                </a>
                <a href="#register" className="btn">
                    Regi$teR
                </a>
                <Link href="/projects">
                    <a className="btn">Pr0jEctS</a>
                </Link>
            </div>

            <Astronaut />
        </header>
    </>
)

export default Header
