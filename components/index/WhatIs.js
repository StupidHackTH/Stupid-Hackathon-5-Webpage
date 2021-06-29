import BlockLayout from "../shared/BlockLayout";
import TextBox from "../shared/TextBox";

const Whatis = (props) => {
  return (
    <>
      <BlockLayout header="What is Stupid Hackathon?" variant="1" id="info">
        <TextBox variant="yellow">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </TextBox>

        <div className="nes-container with-title is-dark">
          <p className="title">Container.is-centered</p>
          <p>Lorem Ipsum</p>
        </div>
      </BlockLayout>
    </>
  );
}

export default Whatis;