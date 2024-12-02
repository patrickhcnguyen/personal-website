import { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import SocialBar from "./components/social/social-bar";
import Squares from "./components/squares/squares";
import AboutMe from "./components/about/aboutMe";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

// Reuse the same useIsMobile hook
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

function App() {
  const isMobile = useIsMobile();

  return (
    <div className="w-full m-0">
      <Navbar />
      {!isMobile && (
        <>
          <Squares />
          <AboutMe />
          <Experience />
          <Projects />
          <Contact />
          <SocialBar />
        </>
      )}
    </div>
  );
}

export default App;
