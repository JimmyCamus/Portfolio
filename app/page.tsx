import { getProjects } from "../api/firebase.api";
import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const HomePage = async () => {
  const projects = await getProjects();
  return (
    <div>
      <Hero />
      <About />
      <Projects projects={projects} />
    </div>
  );
};

export default HomePage;
