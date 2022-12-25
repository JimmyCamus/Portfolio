import { setGradient } from "../styles/gradient";
import PersonIcon from "./icons/Person";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      <div className="mb-5">
        <SectionTitle gradientFrom="primary-gradient" gradientTo="primary">
          ABOUT
        </SectionTitle>
      </div>
      <div className="flex items-center flex-col">
        <div className="mb-4">
          <PersonIcon />
        </div>
        <div className="w-3/4 text-base lg:text-xl lg:leading-7 text-justify text-black flex flex-col">
          <p>
            Hi! {"I'm"} Jeremy Camus Varela, fullstack developer and university
            student of{" "}
            <span className={setGradient("primary-gradient", "primary")}>
              Civil Engineering in Computer Science and Informatics
            </span>{" "}
            at
            {" Universidad Católica del Norte"}. I am passionate about the world
            of{" "}
            <span className={setGradient("secondary", "secondary-gradient")}>
              web development and videogames.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
