import BlockLayout from "../shared/BlockLayout";
import ToggleBlock from "../shared/ToggleBlock";
import TextBox from "../shared/TextBox";

const Sponsor = (props) => {
  return (
    <>
      <BlockLayout header="Send us money" variant="2" id="sponsor">
        <TextBox variant="yellow">
          scb 193-381913-181
        </TextBox>
      </BlockLayout>
    </>
  );
}

export default Sponsor