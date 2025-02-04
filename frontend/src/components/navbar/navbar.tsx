import { useState, useEffect } from "react";
import { useIsMobile } from '../../hooks/useIsMobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, isMobile]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const offset = 150;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      const offset = 200;
      const elementPosition = experienceSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offset = 200;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 200;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const openResume = () => {
    window.open('/PatrickNguyensResume.pdf', '_blank');
  };

  return (
    <nav className={`${isMobile ? 'fixed' : 'sticky'} top-0 left-0 right-0 z-[999]`}>
      {isMobile ? (
        // Mobile Layout (390 x 844)
        <>
          <div className="h-[83px] bg-[#9FC2B2] border-b border-black">
            <div 
              onClick={scrollToTop}
              className="absolute left-[7px] top-[22px] w-[120px] h-[39px] border border-black rounded-full flex items-center justify-center cursor-pointer hover:bg-black/5 transition-colors"
            >
              <span className="text-black font-bold font-inria text-[14px]">
                patrick.nguyen
              </span>
            </div>

            {/* Menu Toggle Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="absolute right-4 top-[22px] w-[39px] h-[39px] flex items-center justify-center"
            >
              <img 
                src={isMenuOpen ? "/menuOpenState.svg" : "/menuClosedState.svg"} 
                alt="menu" 
                className="w-6 h-6"
              />
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div 
            className={`
              fixed top-[83px] right-0 w-screen h-[calc(100vh-83px)]
              bg-[#5D8472] 
              transform transition-transform duration-300 ease-in-out
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
              z-[998]
            `}
          >
            <div className="flex flex-col py-4">
              <span 
                onClick={() => {
                  scrollToAbout();
                  setIsMenuOpen(false);
                }}
                className="px-6 py-3 text-white font-inria text-[18px] cursor-pointer hover:bg-white/10"
              >
                About Me
              </span>
              <span 
                onClick={() => {
                  scrollToExperience();
                  setIsMenuOpen(false);
                }}
                className="px-6 py-3 text-white font-inria text-[18px] cursor-pointer hover:bg-white/10"
              >
                Experience
              </span>
              <span 
                onClick={() => {
                  scrollToProjects();
                  setIsMenuOpen(false);
                }}
                className="px-6 py-3 text-white font-inria text-[18px] cursor-pointer hover:bg-white/10"
              >
                Projects
              </span>
              <span 
                onClick={() => {
                  scrollToContact();
                  setIsMenuOpen(false);
                }}
                className="px-6 py-3 text-white font-inria text-[18px] cursor-pointer hover:bg-white/10"
              >
                Contact
              </span>
              {/* <span 
                className="px-6 py-3 text-white font-inria text-[18px] cursor-pointer hover:bg-white/10"
              >
                More!
              </span> */}
              <span 
                onClick={() => {
                  openResume();
                  setIsMenuOpen(false);
                }}
                className="px-6 py-3 text-white font-inria text-[18px] cursor-pointer hover:bg-white/10"
              >
                Resume
              </span>
            </div>
          </div>
        </>
      ) : (
        
        // Desktop Layout
        <div className="w-full h-[12.5vh] bg-[#9FC2B2] border-b border-black px-4 relative">
          <div 
            onClick={scrollToTop}
            className="absolute left-[3.44%] top-[50%] -translate-y-1/2 w-[121px] h-[39px] border border-black rounded-full flex items-center justify-center cursor-pointer hover:bg-black/5 transition-colors"
          >
            <span className="text-black font-bold font-inria text-[14px]">
              patrick.nguyen
            </span>
          </div>

          {/* Desktop View*/}
          <div className="absolute right-[3.44%] top-[50%] -translate-y-1/2 flex items-center gap-8">
            <span onClick={scrollToAbout} className="text-black font-inria text-[14px] cursor-pointer hover:opacity-80">About Me</span>
            <span onClick={scrollToExperience} className="text-black font-inria text-[14px] cursor-pointer hover:opacity-80">Experience</span>
            <span onClick={scrollToProjects} className="text-black font-inria text-[14px] cursor-pointer hover:opacity-80">Projects</span>
            <span onClick={scrollToContact} className="text-black font-inria text-[14px] cursor-pointer hover:opacity-80">Contact</span>
            {/* <span className="text-black font-inria text-[14px] cursor-pointer hover:opacity-80">More!</span> */}
            <span onClick={openResume} className="text-black font-inria text-[14px] cursor-pointer hover:opacity-80">Resume</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

