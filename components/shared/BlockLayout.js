export default ({ header, children, variant, id }) => (
  <>
    <section className={`container section v-${variant || 0}`} id={id}>
      <div className="section__inner">
        <div className="text-5xl lg:text-6xl leading-none pt-12 pl-2 mb-6">
          <h1 className="block-title">{header}</h1>
        </div>
        {children}
      </div>
    </section>
  </>
);
