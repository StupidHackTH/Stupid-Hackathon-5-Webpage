import BlockLayout from "../shared/BlockLayout";
import ToggleBlock from "../shared/ToggleBlock";

export default (props) => (
  <>
    <BlockLayout header="Sponsor" variant="2" id="sponsor">
      <div className="text-xl text-black border border-black bg-stupid-yellow ml-2 mr-2 p-3 mb-5">
        Lorem ipsum dolor sit amet.
      </div>

      <ToggleBlock title="Notion / Links" content="Something about notion and links" flag="yellow"/>
    </BlockLayout>
  </>
);
