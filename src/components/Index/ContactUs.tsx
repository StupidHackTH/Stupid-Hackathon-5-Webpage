import Link from 'next/link'
import { BlockLayout, TextBox } from '@components/Shared'
import { SectionComponent } from '@types'

const ContactUs: SectionComponent = ({ variant }) => (
    <>
        <BlockLayout header="Contact Us" variant={variant} id="contact">
            <div className="facebook-container">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FStupidHackTH%2F&tabs=timeline&width=850&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=220338228488151"
                scrolling="no"
                frameBorder={0}
                height={500}
                width={1050}
                className="facebook-embed"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
              </iframe>
            </div>
        </BlockLayout>
    </>
)

export default ContactUs
