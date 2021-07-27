import { FunctionComponent } from "react";
import BlockLayout from "@components/Shared/BlockLayout";
import TextBox from "@components/Shared/TextBox";

const Whatis: FunctionComponent = (props) => {
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