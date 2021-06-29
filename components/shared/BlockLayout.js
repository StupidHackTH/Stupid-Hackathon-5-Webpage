const BlockLayout = ({ header, children, variant, id }) => {
  return (
    <>
      <section className={`section section--v-${variant || 0}  container`} id={id}>
        <div className="section__container">
          <div className="section__header">
            <h1 className="section__title">{header}</h1>
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