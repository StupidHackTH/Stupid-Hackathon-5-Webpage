import BlockLayout from "../shared/BlockLayout";
import ToggleBlock from "../shared/ToggleBlock";

const THING = [
  {
    title: "Question",
    content: "Answer",
    flag: "green"
  },
  {
    title: "Question",
    content: "Answer",
    flag: "green"
  },
  {
    title: "Question",
    content: "Answer",
    flag: "green"
  },
  {
    title: "Question",
    content: "Answer",
    flag: "green"
  },
  {
    title: "Question",
    content: "Answer",
    flag: "green"
  }
];

export default (props) => {
  const Blocks = THING.map((e, i) => {
    return <ToggleBlock
        title={e.title} 
        content={e.content}
        flag={e.flag}
        max={e.max} key={e.title + i.toString()}
      />
  })
  
  return (
    <>
      <BlockLayout header="FAQ" variant="1" id="questions">
        {Blocks}
      </BlockLayout>
    </>
  );
}
