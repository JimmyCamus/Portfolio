import Image from "next/image";
import Link from "next/link";
import { Project } from "../../lib/types/project.type";
import { setGradient } from "../../styles/gradient";
import LinkButton from "../LinkButton";

const Card = ({ project }: { project: Project }) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl mb-10 lg:w-96 lg:mx-10">
      <figure>
        <Image src={project.image} alt="Shoes" width="640" height="480" />
      </figure>
      <div className="card-body">
        <div className="lg:flex lg:justify-center">
          <h2
            className={`card-title lg:text-2xl font-bold ${setGradient(
              "primary-gradient",
              "primary"
            )}`}
          >
            {project.name}
          </h2>
        </div>
        <p className="text-justify">{project.description}</p>
        <h2 className="font-bold lg:text-lg">Tech Stack</h2>
        <div className="flex justify-center items-center flex-row mb-2">
          {project.stack.map((tech, index) => (
            <div className="mx-3" key={index}>
              <Image src={tech} alt="a" width="40" height="40" />
            </div>
          ))}
        </div>
        <div className="card-actions justify-evenly items-center flex-row mb-2">
          <LinkButton
            href={project.link}
            gradientFrom="tertiary"
            gradientTo="tertiary-gradient"
          >
            DEMO
          </LinkButton>
          {project.repos.back ? (
            <LinkButton
              href={project.repos.back}
              gradientFrom="primary-gradient"
              gradientTo="primary"
            >
              Back
            </LinkButton>
          ) : null}
          {project.repos.front ? (
            <LinkButton
              href={project.repos.front}
              gradientFrom="secondary"
              gradientTo="secondary-gradient"
            >
              Front
            </LinkButton>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
