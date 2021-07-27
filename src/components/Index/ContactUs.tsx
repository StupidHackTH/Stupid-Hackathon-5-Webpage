import Link from 'next/link'
import { FunctionComponent } from 'react'

import BlockLayout from '@components/Shared/BlockLayout'
import TextBox from '@components/Shared/TextBox'

const ContactUs: FunctionComponent = (props) => (
    <>
        <BlockLayout header="Contact Us" variant="1" id="contact">
            <div className="facebook-container">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FStupidHackTH%2F&tabs=timeline&width=850&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=220338228488151"
                scrolling="no"
                frameBorder={0}
                height={500}
                width={850}
                className="facebook-embed"
                style={{width: "100%"}}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
              </iframe>
            </div>
        </BlockLayout>
    </>
)

export default ContactUs