import { useRef, useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

interface Project {
  title: string;
  description: string;
  image: string;
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [canSwipe, setCanSwipe] = useState(true);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: "Statify",
      description: "I developed a community based way to view\nyour Spotify Stats, alongside a playlist maker,\nsong recommender, and playlist image\ngenerator.",
      image: "/spotify.svg"
    },
    {
      title: "Physarum Slime Simulator",
      description: "Inspired by the Physarum Slime Mold, I made a web simulator to \nemulate the behavior of the slime mold.",
      image: "/physarum.svg"
    },
    {
      title: "AggieMenus",
      description: "I worked on a team of 5 to develop AggieMenus, a PWA and mobile\napp that centralizes UC Davis dining commons menus to simplify\n browsing and switching between dining hall, locations, dates, and\n meal times.",
      image: "/aggiemenus.svg"
    },
    {
      title: "Library Recommender",
      description: "Using Kaggle’s dataset of over 50,000 Amazon book reviews, I\ndeveloped a book recommender that recommends the user books\nbased on prompts the user inputs in.",
      image: "/libraryrecommender.svg"
    }
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentProject < projects.length - 1) {
        setCurrentProject(prev => prev + 1);
      }
    },
    onSwipedRight: () => {
      if (currentProject > 0) {
        setCurrentProject(prev => prev - 1);
      }
    },
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
    delta: 25,
    trackTouch: true,
    touchEventOptions: { passive: true }
  });

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {  
      e.preventDefault();
      
      if (!canSwipe) return;
      
      if (e.deltaX > 25 && currentProject < projects.length - 1) {
        setCurrentProject(prev => prev + 1);
        setCanSwipe(false);
        setTimeout(() => setCanSwipe(true), 800);
      } else if (e.deltaX < -25 && currentProject > 0) {
        setCurrentProject(prev => prev - 1);
        setCanSwipe(false);
        setTimeout(() => setCanSwipe(true), 800);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft' && currentProject > 0) {
      setCurrentProject(prev => prev - 1);
    } else if (e.key === 'ArrowRight' && currentProject < projects.length - 1) {
      setCurrentProject(prev => prev + 1);
    }
  };

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
      
      const preventHorizontalScroll = (e: WheelEvent) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          e.preventDefault();
        }
      };

      projectsRef.current.addEventListener('wheel', preventHorizontalScroll, { passive: false });
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        observer.disconnect();
        projectsRef.current?.removeEventListener('wheel', preventHorizontalScroll);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [currentProject]);

  return (
    <div ref={projectsRef} id="projects" className="h-[50vh] mb-[45vh] relative">
      {/* Title */}
      <div className={`absolute left-[10vw] top-[-5vh] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}>
        <div className="text-[64px] leading-tight font-inria font-bold">
          Projects
        </div>
      </div>
        
      {/* Project Box */}
      <div 
        {...handlers}
        onWheel={handleWheel}
        className={`
          absolute
          left-[25vw]
          top-[5vh]
          w-[60vw]
          h-[35vh]
          bg-[#FAE1C3]
          rounded-[1.17vw]
          transition-all
          duration-1000
          select-none
          overflow-hidden
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
      >
        {/* Project Title */}
        <div className={`
          absolute 
          left-[3.05vw] 
          top-[2.52vh] 
          font-inria 
          font-bold 
          text-[2.5vw]
        `}>
          {projects[currentProject].title}
        </div>

        {/* Project Description */}
        <div className={`
          absolute
          left-[3.05vw]
          top-[10vh]
          w-[36vw]
          h-[25vh]
          font-inria
          text-[1vw]
          whitespace-pre-line
        `}>
          {projects[currentProject].description}
        </div>

        {/* Project Image */}
        <div className={`
          absolute
          right-[1.48vw]
          top-[1.32vh]
          w-[13.67vw]
          h-[21.03vh]
        `}>
          <img 
            src={projects[currentProject].image} 
            alt={projects[currentProject].title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute left-[30vw] top-[43vh] flex gap-[15vw]">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`
              w-[0.9375vw]
              h-[1.44vh]
              rounded-full
              border
              border-black
              transition-colors
              duration-300
              ${currentProject === index ? 'bg-black' : 'bg-transparent'}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
