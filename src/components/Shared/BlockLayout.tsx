import { BlockComponent } from "src/@types";

const BlockLayout: BlockComponent = ({ header, children, variant, id }) => {
  return (
    <>
      <section className={`section section--v-${variant || 0}  container`}>
        <div className="section__container" id={id}>
          <div className="section__title-container">
            <a href={`#${id}`}><h1 className="section__title"><span>{header}</span></h1></a>
          </div>
          <div className="section__body">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlockLayout;