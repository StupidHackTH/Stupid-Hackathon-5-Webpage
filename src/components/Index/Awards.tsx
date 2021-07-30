import { BlockLayout, TextBox } from '@components/Shared';
import { SectionComponent } from "@types";

const Whatis: SectionComponent = ({ variant }) => {
  return (
    <>
      <BlockLayout header="Awards" variant={variant} id="awards">
        <TextBox variant="white">
          Coming Soon! {":)"}
        </TextBox>
      </BlockLayout>
    </>
  );
}

export default Whatis;