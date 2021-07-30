import { BlockLayout, TextBox } from '@components/Shared';
import { SectionComponent } from '@types';

const Sponsor: SectionComponent = ({ variant }) => {
  return (
    <>
      <BlockLayout header="Send us money" variant={variant} id="sponsor">
        <div className="facebook-container">
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FStupidHackTH%2Fposts%2F1481726675493567&show_text=true&width=500"
            scrolling="no"
            frameBorder={0}
            height={599}
            data-width="auto"
            className="facebook-embed"
            style={{backgroundColor: "#ebebeb"}}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
          </iframe>
        </div>
      </BlockLayout>
    </>
  );
}

export default Sponsor