import { getProjects } from "../api/firebase.api";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const HomePage = async () => {
  const projects = await getProjects();
  return (
    <div>
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
};

export default HomePage;
