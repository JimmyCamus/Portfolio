import Link from "next/link";
import GithubIcon from "./icons/Github";
import LinkedinIcon from "./icons/Linkedin";

const SocialMedia = () => {
  return (
    <div className="flex justify-between items-center w-32">
      <Link
        className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        href="https://www.linkedin.com/in/jeremy-camus-varela/"
        target="_blank"
      >
        <LinkedinIcon />
      </Link>
      <Link
        className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        href="https://github.com/JimmyCamus"
        target="_blank"
      >
        <GithubIcon />
      </Link>
    </div>
  );
};

export default SocialMedia;
