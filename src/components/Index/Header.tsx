import { FunctionComponent } from 'react'
import { Astronaut } from '@components/Shared'
import Link from 'next/link'

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
                <a href="#submissions" className="btn">
                    Subm1ssi0ns
                </a>
                <Link href="/projects">
                    <a className="btn">
                        Al1 Pr0jEctS
                    </a>
                </Link>
                <a href="#awards" className="btn">
                    Aw4rds
                </a>
            </div>

            <Astronaut />
        </header>
    </>
)

export default Header
