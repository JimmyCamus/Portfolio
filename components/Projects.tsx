import { Project } from "../lib/types/project.type";
import Dev from "./icons/Dev";
import ProjectList from "./Projects/ProjectList";
import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="mt-20 lg:mt-60">
      <SectionLabel gradientFrom="secondary" gradientTo="secondary-gradient">
        2
      </SectionLabel>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-5">
          <SectionTitle
            gradientFrom="secondary"
            gradientTo="secondary-gradient"
          >
            PROJECTS
          </SectionTitle>
        </div>
        <div className="flex items-center flex-col">
          <div className="mb-4">
            <Dev />
          </div>
          <ProjectList projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
