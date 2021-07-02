import Link from 'next/link'

import Astronaut from '../shared/Astronaut'

const Header = (props) => (
    <>
        <header className="section section__header" id="header-index">
            <div className="section__title-container">
                <h1 className="section__title">Past Projects</h1>
            </div>
            <div className="btn-container">
                <Link href="/">
                    <a className="btn">Back</a>
                </Link>
            </div>

            <Astronaut />
        </header>
    </>
)

export default Header
