import { BlockLayout, ToggleBlock } from '@components/Shared';
import { SectionComponent } from "@types";

const THING = [
  {
    title: "Question",
    content: "Answer",
    flag: "orange"
  },
  {
    title: "Question",
    content: "Answer",
    flag: "orange"
  },
  {
    title: "Question",
    content: "Answer",
    flag: "orange"
  },
  {
    title: "Question",
    content: "Answer",
    flag: "orange"
  },
  {
    title: "Question",
    content: "Answer",
    flag: "orange"
  }
];

const QA: SectionComponent = ({ variant }) => {
  const Blocks = THING.map((e, i) => {
    return <ToggleBlock
        title={e.title} 
        content={e.content}
        flag={e.flag}
        key={e.title + i.toString()}
      />
  })
  
  return (
    <>
      <BlockLayout header="FAQ" variant={variant} id="questions">
        {Blocks}
      </BlockLayout>
    </>
  );
}

export default QA;