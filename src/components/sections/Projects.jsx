import projects from '../../../data/projects.json';
import ProjectCard from '../content/ProjectCard';
import SectionHeading from '../structure/SectionHeader';

const Projects = () => {
    return (
    <section
      id="proyectos"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-20">
        <SectionHeading
          id="proyectos-titulo"
          path="~/proyectos"
          title="Proyectos"
          description="Una selección de trabajos personales y profesionales en los que he participado de principio a fin."
        />
        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
};

export default Projects;
