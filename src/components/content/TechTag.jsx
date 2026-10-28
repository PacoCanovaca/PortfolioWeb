const TechTag = ({ children }) => {
  return (
    <span
      className='inline-flex items-center rounded border border-border bg-background px-2 py-1 font-mono text-sm text-foreground  transition-colors hover:border-brand hover:bg-brand-soft hover:text-brand-hover'
    >
      {children}
    </span>
  )
};

export default TechTag;
