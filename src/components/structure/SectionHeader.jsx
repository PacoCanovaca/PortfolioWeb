const SectionHeading = ({ id, path, title, description }) => {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-mono text-sm text-brand">{path}</span>
      <h2 id={id} className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl leading-relaxed text-text-muted text-pretty">{description}</p>
      ) : null}
    </div>
  )
};

export default SectionHeading;