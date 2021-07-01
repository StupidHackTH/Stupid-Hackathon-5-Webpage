import BlockLayout from "../shared/BlockLayout";
import TextBox from "../shared/TextBox";

const ContactUs = (props) => (
  <>
    <BlockLayout header="Contact Us" variant="1" id="contact">
      <TextBox variant="yellow">
        <div className="contact-link">
          <a href="https://www.facebook.com/StupidHackTH/" className="contact-link__text" target="_blank">Our Facebook Page</a>
        </div>
      </TextBox>
    </BlockLayout>
  </>
);

export default ContactUs;