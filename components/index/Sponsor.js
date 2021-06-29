import BlockLayout from "../shared/BlockLayout";
import ToggleBlock from "../shared/ToggleBlock";
import TextBox from "../shared/TextBox";

const Sponsor = (props) => {
  return (
    <>
      <BlockLayout header="Sponsor" variant="2" id="sponsor">
        <TextBox variant="yellow">
          Lorem ipsum dolor sit amet.
        </TextBox>

        <ToggleBlock title="Notion / Links" content="Something about notion and links" flag="yellow"/>
      </BlockLayout>
    </>
  );
}

export default Sponsor