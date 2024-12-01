import { useRef, useState, useEffect } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={projectsRef} id="projects" className="h-[50vh] mb-[45vh] relative">
      {/* Title */}
      <div className={`absolute left-[10vw] top-[-5vh] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}>
        <div className="text-[64px] leading-tight font-inria font-bold">
          Projects
        </div>
      </div>
        
      {/* Project Box */}
      <div className={`
        absolute
        left-[25vw]
        top-[1.8vh]
        w-[60vw]
        h-[35vh]
        bg-[#FAE1C3]
        rounded-[1.17vw]
        transition-all
        duration-1000
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `} />
    </div>
  );
};

export default Projects; 