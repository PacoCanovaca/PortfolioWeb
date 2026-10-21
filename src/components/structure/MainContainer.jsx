import SectionHeading from "./SectionHeader";

const MainContainer = ({ children, id, path, title, description }) => {
  const headingId = `${id}-titulo`;

  return (
    <section id={id} className="mx-auto mt-30 mb-10 w-[calc(100%-20px)] flex max-w-5xl flex-col gap-10 px-10 py-10 rounded-xl border border-border bg-surface/90 backdrop-blur">
        <SectionHeading
          id={headingId}
          path={path}
          title={title}
          description={description}
        />
        {children}
    </section>
  )
};

export default MainContainer;