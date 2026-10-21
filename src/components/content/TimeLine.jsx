const Timeline = ({ title, icon: Icon, entries }) => {
  return (
    <article className="flex flex-col gap-6 rounded-xl border-2 border-border bg-card p-6">
      <h3 className="flex items-center gap-2 text-lg font-semibold">
        <span className="flex size-8 items-center justify-center rounded-md bg-brand-soft text-brand-hover">
          <Icon className="size-4" aria-hidden="true" />
        </span>
        {title}
      </h3>
      <ol className="flex flex-col border-l border-border">
        {entries.map((entry) => (
          <li key={`${entry.title}-${entry.period}`} className="relative flex flex-col gap-1 pb-8 pl-6 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-1.5 size-3 rounded-full border-2 border-brand bg-background"
            />
            <span className="font-mono text-xs text-text-muted">{entry.period}</span>
            <p className="font-semibold">{entry.title}</p>
            <p className="text-sm font-medium text-brand">{entry.place}</p>
            <p className="mt-1 text-sm leading-relaxed text-text-muted text-pretty">{entry.description}</p>
          </li>
        ))}
      </ol>
    </article>
  )
};

export default Timeline;

