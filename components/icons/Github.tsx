import Image from "next/image";
import GithubSvg from "../../assets/icons/github.svg";

const GithubIcon = () => {
  return <Image src={GithubSvg} width="45" height="45" alt="Github icon" />;
};

export default GithubIcon;
