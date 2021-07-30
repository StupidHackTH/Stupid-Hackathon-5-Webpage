import { BlockLayout, TextBox } from '@components/Shared';
import { SectionComponent } from '@types';

const Whatis: SectionComponent = ({ variant }) => {
  return (
    <>
      <BlockLayout header="What is The Stupid Hackathon?" variant={variant} id="info">
        <TextBox variant="yellow">
        Stupid Hackathon is something that is something that is something that is something.
        </TextBox>
      </BlockLayout>
    </>
  );
}

export default Whatis;