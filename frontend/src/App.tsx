import { useIsMobile } from './hooks/useIsMobile';
import Navbar from "./components/navbar/navbar";
import SocialBar from "./components/social/social-bar";
import Squares from "./components/squares/squares";
import AboutMe from "./components/about/aboutMe";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const isMobile = useIsMobile();

  return (
    <div className="w-full m-0">
      <Navbar />
      <Squares />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      {!isMobile && (
        <>
          <SocialBar />
        </>
      )}
      <Analytics />
    </div>
  );
}

export default App;
