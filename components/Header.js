import BlockLayout from "./BlockLayout";

export default (props) => (
  <>
    <div className="container mx-auto flex justify-between flex-col h-screen max-w-5xl">
      <div className="text-6xl lg:text-7xl leading-none pt-12 pl-2">
        <p>
          The 5th <br /> StuPId H@CK <br />
          THaIL@Nd
        </p>
      </div>
      <div className="text-5xl lg:text-6xl text-black leading-none pt-12 pl-2 pb-24">
        <div className="bg-stupid-green mt-1 mb-1 w-min">R3gi$teR</div>
        <div className="bg-stupid-green mt-1 mb-1 w-min whitespace-nowrap">
          M0re 1nFo
        </div>
        <div className="bg-stupid-green mt-1 mb-1 w-min">F@cEB00K</div>
      </div>
    </div>
  </>
);
