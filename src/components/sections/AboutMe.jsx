import MainContainer from '../structure/MainContainer';
import SectionHeading from '../structure/SectionHeader';
import { Code2, File } from 'lucide-react';

const AboutMe = () => {
  return (
    <MainContainer 
    >
      <div className="grid items-top mb-4 gap-12 md:grid-cols-[1fr_320px] pr-10">
        <div className="flex flex-col gap-4 text-md text-text max-w-lg">
          <div className="mb-4">
            <SectionHeading
              id="sobre-mi"
              path="~/about-me"
              title="¡Bienvenido a mi rincón!"
            />
          </div>
          <p>
            ¡Hola! Me llamo Paco. Soy un desarrollador de software interesado en el desarrollo backend, la inteligencia artificial y la ingeniería y ciencia de datos.
          </p>
          <p>
            Mi camino hasta aquí no ha sido precisamente lineal: antes de adentrarme en el mundo del desarrollo, trabajé como maestro de Educación Primaria. Esta experiencia me ha enseñado a comunicar, organizar ideas y afrontar problemas desde diferentes perspectivas, habilidades que hoy también aplico al programar.
          </p>
          <p>
            Me gusta entender cómo funcionan las cosas, buscar soluciones a problemas reales y construir proyectos que tengan sentido. Actualmente sigo ampliando mis conocimientos y explorando nuevas tecnologías.
          </p>
          <p>
            Fuera del código, me encontrarás probablemente delante de un tablero de ajedrez, siguiendo alguna carrera de motor o practicando algún deporte. Soy una persona curiosa y siempre tengo ganas de explorar nuevos horizontes y experiencias.
          </p>
          <p>
            Mi objetivo es seguir creciendo como desarrollador, aportar valor a los proyectos en los que participe y, sobre todo, disfrutar del camino. Al fin y al cabo, esa es una de las principales razones por las que decidí cambiar de rumbo.
          </p>
        </div>
        <div className="flex flex-col mt-4 justify-start items-center gap-12"> 
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-soft px-3 py-1 font-mono text-xs text-brand-hover">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
          Disponible para nuevos proyectos
          </span>
          <figure className="mx-auto w-full max-w-xs">
            <div className="overflow-hidden rounded-xl border border-border bg-brand-hover p-2">
              <img 
                src="src/assets/images/selfImage.png"
                alt={"Caricatura de Paco"}
                priority
                className="aspect-square rounded-lg object-cover"         
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between font-mono text-xs text-text-muted">
              <span>~/paco</span>
              <span className="text-primary">{'{ dev: true }'}</span>
            </figcaption>
          </figure>
          <div className="w-full flex items-center justify-evenly">
            <a href="src/assets/cv.pdf" target="_blank" className="inline-flex items-center gap-1.5 rounded-md bg-brand px-5 py-3 text-sm font-medium text-surface transition-colors hover:bg-brand-hover">
              <File className="size-4" aria-hidden="true" />
              Ver CV
            </a>
            <a href="https://github.com/PacoCanovaca" target="_blank" className="inline-flex items-center gap-1.5 rounded-md bg-text px-5 py-3 text-sm font-medium text-surface transition-colors hover:bg-text-muted">
              <Code2 className="size-4" aria-hidden="true" />
              Visitar GitHub
            </a>
          </div>
        </div>
        
      </div>
    </MainContainer>
  )
}

export default AboutMe;