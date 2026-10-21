import projects from '../../../data/projects.json';
import ProjectCard from '../content/ProjectCard';
import MainContainer from '../structure/MainContainer';
import SectionHeading from '../structure/SectionHeader';

const Projects = () => {
    return (
    <MainContainer 
      id="proyectos"
      path="~/projects"
      title="Proyectos"
      description="Una selección de trabajos personales y profesionales en los que he participado de principio a fin."
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
};

export default Projects;
