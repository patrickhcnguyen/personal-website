import { useRef, useState, useEffect } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '-100px 0px' 
      }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={experienceRef} id="experience" className="h-[50vh] mb-[45vh] relative">
      {/* Experience Title */}
      <div className={`absolute left-[10vw] top-[-5vh] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}>
        <div className="text-[64px] leading-tight font-inria font-bold">
          Experience
        </div>
      </div>
      
      {/* Timeline (vertical line) */}
      <div className={`absolute left-[61.48%] top-[-5vh] w-[2px] h-[83.9vh] mb-[5px] bg-black transition-all duration-1000 ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'} origin-top`} />
      {/* Circles with dates */}
      <div className="absolute left-[60.42%] top-[5.5vh] flex items-center">
        <span className={`absolute right-[calc(2.11vw+1.328vw)] whitespace-nowrap font-inria text-[1.5vw] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Oct 2024 - Present
        </span>
        <div className={`w-[2.11vw] h-[2.11vw] bg-black rounded-full transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
      </div>
      <div className="absolute left-[60.42%] top-[25.5vh] flex items-center">
        <div className={`w-[2.11vw] h-[2.11vw] bg-black rounded-full transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
        <span className={`absolute left-[calc(2.11vw+1.328vw)] whitespace-nowrap font-inria text-[1.5vw] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Sept 2024 - Present
        </span>
      </div>
      <div className="absolute left-[60.42%] top-[45.5vh] flex items-center">
        <span className={`absolute right-[calc(2.11vw+1.328vw)] whitespace-nowrap font-inria text-[1.5vw] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Jul 2024 - Sept 2024
        </span>
        <div className={`w-[2.11vw] h-[2.11vw] bg-black rounded-full transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
      </div>
      <div className="absolute left-[60.42%] top-[65.5vh] flex items-center">
        <div className={`w-[2.11vw] h-[2.11vw] bg-black rounded-full transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
        <span className={`absolute left-[calc(2.11vw+1.328vw)] whitespace-nowrap font-inria text-[1.5vw] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Oct 2023 - Jun 2024
        </span>
      </div>
      {/* Orange Bubbles */}
      <div className={`absolute left-[66.9%] top-[5.5vh] w-[23vw] h-[15vh] bg-[#C05200] rounded-full transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        <div className={`absolute left-[2vw] top-[1.5vh] font-inria font-bold text-[min(2vh,1.5vw)] text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Innovation and Research Lab
        </div>
        <div className={`absolute left-[2vw] top-[4.5vh] font-inria italic text-[min(1.75vh,1.25vw)] text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Software Engineer
        </div>
        <div className={`absolute left-[2vw] top-[7vh] font-inria text-[min(1.45vh,1.25vw)] text-white pr-[15%] leading-tight transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          I collaborate with the researchers of the lab
          to create solutions based on problems that
          UC Davis students have.
        </div>
      </div>
      <div className={`absolute left-[33.16%] top-[25.5vh] w-[23vw] h-[15vh] bg-[#C05200] rounded-full transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        <div className={`absolute left-[2vw] top-[1.5vh] font-inria font-bold text-[min(2vh,1.5vw)] text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          AggieWorks
        </div>
        <div className={`absolute left-[2vw] top-[4.5vh] font-inria italic text-[min(1.75vh,1.25vw)] text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Software Engineer
        </div>
        <div className={`absolute left-[2vw] top-[7vh] font-inria text-[min(1.45vh,1.25vw)] text-white pr-[15%] leading-tight transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          I’m working on the AggieMenus PWA and 
          mobile app for 38,000 + students.
        </div>
      </div>
      <div className={`absolute left-[66.9%] top-[45.5vh] w-[23vw] h-[15vh] bg-[#C05200] rounded-full transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        <div className={`absolute left-[2vw] top-[1.5vh] font-inria font-bold text-[min(2vh,1.5vw)] text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Icarus Development
        </div>
        <div className={`absolute left-[2vw] top-[4.5vh] font-inria italic text-[min(1.75vh,1.25vw)] text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Software Engineer Intern
        </div>
        <div className={`absolute left-[2vw] top-[7vh] font-inria text-[min(1.4vh,1.25vw)] text-white pr-[15%] leading-tight transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          I worked on a Canvas integrated AI powered
          study tool that automatically transcribed
          lecture recordings.
        </div>
      </div>
      <div className={`absolute left-[33.16%] top-[65.5vh] w-[23vw] h-[15vh] bg-[#C05200] rounded-full transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        <div className={`absolute left-[2vw] top-[1.5vh] font-inria font-bold text-[min(2vh,1.5vw)] text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Google Developer Student Club
        </div>
        <div className={`absolute left-[2vw] top-[4.5vh] font-inria italic text-[min(1.75vh,1.15vw)] text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Technical Associate
        </div>
        <div className={`absolute left-[2vw] top-[7vh] font-inria text-[min(1.4vh,1.15vw)] text-white pr-[15%] leading-tight transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          I created a full-stack web app that allowed
          users to log and track their health 
          information over the course of a week.
        </div>
      </div>
      {/* Work Icons */}
      <div className={`absolute left-[92%] top-[7.5vh] w-[3.91vw] h-[3.91vw] transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
        <img src="/irl.svg" alt="Innovation and Research Lab" className="w-full h-full" />
      </div>

      <div className={`absolute left-[25%] top-[27.5vh] w-[3.91vw] h-[3.91vw] transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
        <img src="/aggieworks.svg" alt="AggieWorks" className="w-full h-full" />
      </div>

      <div className={`absolute left-[92%] top-[47.5vh] w-[3.91vw] h-[3.91vw] transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
        <img src="/icarusdevelopment.svg" alt="Icarus Development" className="w-full h-full" />
      </div>

      <div className={`absolute left-[25%] top-[67.5vh] w-[3.91vw] h-[3.91vw] transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
        <img src="/gdsc.svg" alt="Google Developer Student Club" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Experience; 