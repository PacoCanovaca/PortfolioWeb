import { Briefcase, GraduationCap } from "lucide-react";
import experience from "../../../data/experience.json";
import education from "../../../data/education.json";
import TimelineColumn from "../content/TimeLine";
import MainContainer from "../structure/MainContainer";

const CareerPath = () => {
  return (
    <MainContainer
      id="trayectoria"
      path="~/career-path"
      title="Trayectoria"
      description="Mi recorrido profesional y formativo hasta hoy."
    >
      <div className="grid gap-10 md:grid-cols-2 mt-6 mb-4">
        <TimelineColumn
          title="Experiencia profesional"
          icon={Briefcase}
          entries={experience}
        />
        <TimelineColumn
          title="Formación"
          icon={GraduationCap}
          entries={education}
        />
      </div>
    </MainContainer>
  );
};

export default CareerPath;
