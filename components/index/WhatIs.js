import BlockLayout from "../shared/BlockLayout";
import TextBox from "../shared/TextBox";

const Whatis = (props) => {
  return (
    <>
      <BlockLayout header="What is The Stupid Hackathon?" variant="1" id="info">
        <TextBox variant="yellow">
        Stupid Hackathon is something that is something that is something that is something.
        </TextBox>
      </BlockLayout>
    </>
  );
}

export default Whatis;