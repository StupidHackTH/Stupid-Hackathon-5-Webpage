import { FunctionComponent } from "react";
import { BlockLayout, ToggleBlock } from '@components/Shared';

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

const QA: FunctionComponent = (props) => {
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
      <BlockLayout header="FAQ" variant={1} id="questions">
        {Blocks}
      </BlockLayout>
    </>
  );
}

export default QA;