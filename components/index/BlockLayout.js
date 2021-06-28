export default ({ header, children }) => (
  <>
    <div className="container mx-auto max-w-5xl">
      <div className="text-5xl lg:text-6xl leading-none pt-12 pl-2 mb-6">
        <p>{header}</p>
      </div>
      {children}
    </div>
  </>
);
