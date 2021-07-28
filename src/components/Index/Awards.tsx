import { BlockLayout, TextBox } from '@components/Shared';
import { SectionComponent } from "@types";

const Whatis: SectionComponent = ({ variant }) => {
  return (
    <>
      <BlockLayout header="Awards" variant={variant} id="awards">
        <TextBox variant="white">
        Stupid Hackathon is something that is something that is something that is something.
        </TextBox>
      </BlockLayout>
    </>
  );
}

export default Whatis;