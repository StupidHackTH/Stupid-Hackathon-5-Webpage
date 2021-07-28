import { FunctionComponent } from 'react'
import { Astronaut } from '@components/Shared'

const Header: FunctionComponent = (props) => (
    <>
        <header className="section-block -header" id="header-section">
            <div className="title-container">
                <h1 className="title">
                    The 5th
                    <br />
                    StuPId H@CK
                    <br />
                    THaIL@Nd
                </h1>
            </div>
            <div className="btn-container">
                <a href="#agenda" className="btn">
                    Ag3nD4
                </a>
                <a href="#projects" className="btn">
                    Pr0jEctS
                </a>
                <a href="#awards" className="btn">
                    Aw4rds
                </a>
            </div>

            <Astronaut />
        </header>
    </>
)

export default Header
