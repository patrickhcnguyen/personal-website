import Navbar from "./components/navbar/navbar";
import SocialBar from "./components/social/social-bar";
import Squares from "./components/squares/squares";
import AboutMe from "./components/about/aboutMe";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";

function App() {

  return (
    <div className="w-full m-0">
      <Navbar />
      <Squares />
      <AboutMe />
      <Experience />
      <Projects />
      <SocialBar />
    </div>
  );
}

export default App;
