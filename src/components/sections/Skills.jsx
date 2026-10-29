import TechTag from "../content/TechTag";
import skills from "../../../data/skills.json";
import MainContainer from "../structure/MainContainer";

const Skills = () => {
  return (
    <MainContainer
      id="habilidades"
      path="~/skills"
      title="Habilidades"
      description="Tecnologías, herramientas y competencias transversales con las que cuento en mi día a día profesional."
    >
      <div className="flex flex-col gap-6 mt-10 mb-4">
        {skills.map((type) => (
          <article className="flex flex-col gap-4">
            <h3 className="text-2xl font-medium text-brand-hover">
              {type.name}
            </h3>
            <dl className="grid overflow-hidden rounded-xl border border-border bg-card sm:grid-cols-2">
              {type.groups.map((group) => (
                <div
                  key={group.label}
                  className="flex flex-col gap-4 border-border p-6 [&:not(:last-child)]:border-b sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  <dt className="text-md font-semibold uppercase tracking-wider text-muted">
                    {group.label}
                  </dt>
                  <dd>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li key={item}>
                          <TechTag>{item}</TechTag>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </MainContainer>
  );
};

export default Skills;
