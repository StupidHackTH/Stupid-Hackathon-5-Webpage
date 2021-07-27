import Link from 'next/link'
import { FunctionComponent } from 'react'
import { Astronaut } from '@components/Shared'

const Header: FunctionComponent = (props) => (
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
                <a href="#agenda" className="btn">
                    Ag3nD4
                </a>
                <a href="#sponsor" className="btn">
                    Giv3 Us M0n3¥
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
