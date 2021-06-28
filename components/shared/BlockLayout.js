export default ({ header, children, variant, id }) => (
  <>
    <section className={`container section section__v-${variant || 0}`} id={id}>
      <div className="section__inner">
        <div className="section--title">
          <h1 className="section--title--header">{header}</h1>
        </div>
        {children}
      </div>
    </section>
  </>
);
