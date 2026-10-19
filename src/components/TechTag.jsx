const TechTag = ({ children }) => {
  return (
    <span
      className='inline-flex items-center rounded border border-border bg-background px-2 py-1 font-mono text-xs text-foreground'
    >
      {children}
    </span>
  )
};

export default TechTag;
