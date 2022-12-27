import { Project } from "../../lib/types/project.type";
import Card from "./Card";

const ProjectList = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="flex flex-col justify-center lg:flex-row flex-wrap">
      {projects.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
