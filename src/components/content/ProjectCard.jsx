import { Code2 } from 'lucide-react';
import TechTag from '../TechTag';

const ProjectCard = ({ project }) => {
  return (
    <article className="group flex h-full flex-col gap-5 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-brand/50">
      <header className="flex items-center justify-between font-mono text-xs text-text-muted">
        <span className="rounded bg-brand-soft px-2 py-1 text-brand">{project.id}</span>
        <time>{project.year}</time>
      </header>

      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-brand">
          {project.title}
        </h3>
        <p className="leading-relaxed text-text-muted text-pretty">{project.description}</p>
      </div>

      <ul className="flex flex-wrap gap-2" aria-label="Tecnologías utilizadas">
        {project.stack.map((tech) => (
          <li key={tech}>
            <TechTag>{tech}</TechTag>
          </li>
        ))}
      </ul>

      <footer className="flex items-center gap-4 border-t border-border pt-4 text-sm font-medium">
        {project.repo ? (
          <a
            href={project.repo}
            className="inline-flex items-center gap-1.5 text-text transition-colors hover:text-brand"
          >
            <Code2 className="size-4" aria-hidden="true" />
            Pincha aquí para ver el código
            <span className="sr-only"> de {project.title}</span>
          </a>
        ) : null}
      </footer>
    </article>
  )
}

export default ProjectCard;