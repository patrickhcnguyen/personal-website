import { useRef, useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useIsMobile } from '../../hooks/useIsMobile';

interface Project {
  title: string;
  description: string;
  mobileDescription: string;
  image: string;
  url: string;
  tags: string[];
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [canSwipe, setCanSwipe] = useState(true);
  const projectsRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const projects: Project[] = [
    {
      title: "Statify",
      description: "I developed a community based way to view\nyour Spotify Stats, alongside a playlist maker,\nsong recommender, and playlist image\ngenerator.",
      mobileDescription: "I developed a community based way to view\nyour Spotify Stats, alongside a playlist maker,\nsong recommender, and playlist image\ngenerator.",
      image: "/spotify.svg",
      url: "https://github.com/patrickhcnguyen/Statify",
      tags: ["MongoDB", "Express", "React", "Node", "Tailwind"]
    },
    {
      title: "Physarum Slime Simulator",
      description: "Inspired by the Physarum Slime Mold, I made a web simulator to \nemulate the behavior of the slime mold.",
      mobileDescription: "Inspired by the Physarum Slime Mold, I made a web simulator to emulate the behavior of the slime mold.",
      image: "/physarum.svg",
      url: "https://physarum-pathfinder.vercel.app/",
      tags: ["React", "D3.js"]
    },
    {
      title: "AggieMenus",
      description: "I worked on a team of 5 to develop AggieMenus, a PWA and mobile\napp that centralizes UC Davis dining commons menus to simplify\n browsing and switching between dining hall, locations, dates, and\n meal times.",
      mobileDescription: "I worked on a team of 5 to develop AggieMenus, a PWA and mobile app that centralizes UC Davis dining commons menus to simplify browsing and switching between dining hall, locations, dates, and meal times.",
      image: "/aggiemenus.svg",
      url: "https://www.aggiemenus.org/menu",
      tags: ["React", "Next.js", "Tailwind", "Supabase"]
    },
    {
      title: "Library Recommender",
      description: "Using Kaggle’s dataset of over 50,000 Amazon book reviews, I\ndeveloped a book recommender that recommends the user books\nbased on prompts the user inputs in.",
      mobileDescription: "Using Kaggle’s dataset of over 50,000 Amazon book reviews, I developed a book recommender that recommends the user books based on prompts the user inputs in.",
      image: "/libraryrecommender.svg",
      url: "https://github.com/patrickhcnguyen/Library-Recommender",
      tags: ["Python", "Pandas", "NLTK", "PostgreSQL"]
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
    trackMouse: false,
    trackTouch: true,
    delta: 10,
    swipeDuration: 500
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

  const handleTapLeft = () => {
    if (currentProject > 0) {
      setCurrentProject(prev => prev - 1);
    }
  };

  const handleTapRight = () => {
    if (currentProject < projects.length - 1) {
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

    return () => {
      if (projectsRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={projectsRef} id="projects" className={`
      relative
      ${isMobile ? 'mt-[100px] min-h-screen px-5 py-8' : 'h-[50vh] mb-[45vh]'}
    `}>
      {/* Title */}
      <div className={`
        ${isMobile ? 'mb-12' : 'absolute left-[10vw] top-[-5vh]'}
        transition-all duration-1000 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}
      `}>
        <div className={`
          ${isMobile ? 'text-[36px]' : 'text-[64px]'}
          leading-tight font-inria font-bold
        `}>
          Projects
        </div>
      </div>
        
      {/* Project Box Container */}
      <div className="relative">
        {/* Left Tap Area */}
        {isMobile && (
          <div 
            onClick={handleTapLeft}
            className={`
              absolute 
              left-0 
              top-0 
              w-[20%] 
              h-full 
              z-10
              ${currentProject > 0 ? 'cursor-pointer' : 'cursor-not-allowed'}
            `}
          />
        )}

        {/* Right Tap Area */}
        {isMobile && (
          <div 
            onClick={handleTapRight}
            className={`
              absolute 
              right-0 
              top-0 
              w-[20%] 
              h-full 
              z-10
              ${currentProject < projects.length - 1 ? 'cursor-pointer' : 'cursor-not-allowed'}
            `}
          />
        )}

        {/* Project Box */}
        <div 
          {...(isMobile ? handlers : {})}
          onWheel={handleWheel}
          className={`
            ${isMobile ? 'relative mt-4' : 'absolute left-[25vw] top-[5vh]'}
            ${isMobile ? 'w-full' : 'w-[60vw]'}
            ${isMobile ? 'h-[450px]' : 'h-[35vh]'}
            bg-[#FAE1C3]
            ${isMobile ? 'rounded-[20px]' : 'rounded-[1.17vw]'}
            transition-all
            duration-1000
            select-none
            overflow-visible
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            touch-pan-y
          `}
        >
          <div className="relative h-full w-full">
            {/* Project Image */}
            <a 
              href={projects[currentProject].url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                absolute
                ${isMobile ? 'right-4 top-4 w-[120px] h-[80px]' : 'right-[1.48vw] top-[1.32vh] w-[13.67vw] h-[21.03vh]'}
                cursor-pointer
                z-20
              `}
            >
              <img 
                src={projects[currentProject].image} 
                alt={projects[currentProject].title}
                className="w-full h-full object-contain"
              />
            </a>

            {/* Project Title */}
            <div className={`
              absolute 
              ${isMobile ? 'left-4 top-4 pr-[140px]' : 'left-[3.05vw] top-[2.52vh]'}
              ${isMobile ? 'text-[24px]' : 'text-[2.5vw]'}
              font-inria 
              font-bold 
              break-words
              z-20
            `}>
              {projects[currentProject].title}
            </div>

            {/* Project Description */}
            <div className={`
              absolute
              ${isMobile ? 'left-4 top-[100px] pr-4' : 'left-[3.05vw] top-[10vh]'}
              ${isMobile ? 'w-[calc(100%-32px)]' : 'w-[36vw]'}
              ${isMobile ? 'text-[14px]' : 'text-[1vw]'}
              font-inria
              whitespace-pre-line
              z-20
            `}>
              {isMobile 
                ? projects[currentProject].mobileDescription 
                : projects[currentProject].description
              }
            </div>

            {/* Project Tags */}
            <div className={`
              ${isMobile ? 'absolute bottom-4 left-4 right-4' : 'absolute left-[3.05vw] bottom-[2.52vh]'}
              flex
              flex-wrap
              ${isMobile ? 'gap-1.5' : 'gap-2'}
              z-20
            `}>
              {projects[currentProject].tags.map((tag, index) => (
                <div
                  key={index}
                  className={`
                    ${isMobile ? 'px-2 py-0.5 text-[10px]' : 'px-[0.8vw] py-[0.36vh] text-[0.9375vw]'}
                    border
                    border-black
                    rounded-full
                    font-inria
                    whitespace-nowrap
                    bg-[#FAE1C3]
                  `}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className={`
        ${isMobile ? 'relative mt-8 mb-16 flex justify-center gap-4' : 'absolute left-[30vw] top-[43vh] flex gap-[15vw]'}
      `}>
        {projects.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`
              ${isMobile ? 'w-3 h-3' : 'w-[0.9375vw] h-[1.44vh]'}
              rounded-full
              border
              border-black
              transition-colors
              duration-300
              cursor-pointer
              ${currentProject === index ? 'bg-black' : 'bg-transparent'}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
