import { BlockComponent } from "@types";

const BlockLayout: BlockComponent = ({ header, children, variant, id }) => {
  return (
    <>
      <section className={`section-block -v${variant || 1}`}>
        <div className="section-container" id={id}>
          <div className="title-container">
            <a href={`#${id}`}><h2 className="title"><span className="inner">{header}</span></h2></a>
          </div>
          <div className="body">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlockLayout;