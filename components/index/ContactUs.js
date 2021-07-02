import Link from 'next/link'

import BlockLayout from '../shared/BlockLayout'
import TextBox from '../shared/TextBox'

const ContactUs = (props) => (
    <>
        <BlockLayout header="Contact Us" variant="1" id="contact">
            <TextBox variant="yellow">
                <div className="contact-link">
                    <Link href="https://www.facebook.com/StupidHackTH/">
                        <a className="contact-link__text" target="_blank">
                            Our Facebook Page
                        </a>
                    </Link>
                </div>
            </TextBox>
        </BlockLayout>
    </>
)

export default ContactUs
