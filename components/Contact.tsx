import { setGradient } from "../styles/gradient";
import Rocket from "./icons/Rocket";
import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import SocialMedia from "./SocialMedia";

const Contact = () => {
  return (
    <div className="mt-20 lg:mt-36">
      <SectionLabel gradientFrom="tertiary" gradientTo="tertiary-gradient">
        3
      </SectionLabel>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-5">
          <SectionTitle gradientFrom="tertiary" gradientTo="tertiary-gradient">
            CONTACT ME
          </SectionTitle>
        </div>
        <div className="flex items-center flex-col">
          <div className="mb-4">
            <Rocket />
          </div>
        </div>
        <div className="w-3/4 text-base lg:text-xl lg:leading-7 text-justify lg:text-center text-black flex flex-col">
          <p>
            If you{" "}
            <span className={setGradient("primary-gradient", "primary")}>
              like everything {"you'"}ve seen
            </span>{" "}
            , you can contact me to make an agreement on my{" "}
            <span className={setGradient("secondary", "secondary-gradient")}>
              social media.
            </span>{" "}
          </p>
        </div>
        <div className="mt-10 mb-16">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Contact;
