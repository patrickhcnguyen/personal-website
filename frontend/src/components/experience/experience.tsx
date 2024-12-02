import { useRef, useState, useEffect } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

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
    <div ref={experienceRef} id="experience" className={`
      relative
      ${isMobile ? 'min-h-[900px] px-5' : 'h-[95vh]'}
    `}>
      <div className={`
        ${isMobile ? 'mt-8 mb-12' : 'absolute left-[10vw] top-[-5vh]'}
        transition-all duration-1000 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}
      `}>
        <div className={`
          ${isMobile ? 'text-[36px]' : 'text-[64px]'}
          leading-tight font-inria font-bold
        `}>
          Experience
        </div>
      </div>
      
      {/* Timeline  */}
      <div className={`
        ${isMobile 
          ? 'absolute left-8 top-[120px] w-[2px] h-[calc(100%-120px)]' 
          : 'absolute left-[61.48%] top-[5vh] w-[2px] h-[80vh]'}
        mb-[5px] bg-black transition-all duration-1000 
        ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'} 
        origin-top
      `} />

      {/* Experience Items */}
      <div className={`
        ${isMobile ? 'mt-16 pb-20' : ''}
        relative
      `}>
        <ExperienceItem
          isMobile={isMobile}
          isVisible={isVisible}
          position={isMobile ? 'right' : 'left'}
          date="Oct 2024 - Present"
          company="Innovation and Research Lab"
          role="Software Engineer"
          description="I collaborate with the researchers of the lab to create solutions based on problems that UC Davis students have."
          icon="/irl.svg"
          top={isMobile ? '50px' : '5.5vh'}
        />

        <ExperienceItem
          isMobile={isMobile}
          isVisible={isVisible}
          position={isMobile ? 'right' : 'right'}
          date="Sept 2024 - Present"
          company="AggieWorks"
          role="Software Engineer"
          description="I'm working on the AggieMenus PWA and mobile app for 38,000 + students."
          icon="/aggieworks.svg"
          top={isMobile ? '250px' : '25.5vh'}
        />

        <ExperienceItem
          isMobile={isMobile}
          isVisible={isVisible}
          position={isMobile ? 'right' : 'left'}
          date="Jul 2024 - Sept 2024"
          company="Icarus Development"
          role="Software Engineer Intern"
          description="I worked on a Canvas integrated AI powered study tool that automatically transcribed lecture recordings."
          icon="/icarusdevelopment.svg"
          top={isMobile ? '450px' : '45.5vh'}
        />

        <ExperienceItem
          isMobile={isMobile}
          isVisible={isVisible}
          position={isMobile ? 'right' : 'right'}
          date="Oct 2023 - Jun 2024"
          company="Google Developer Student Club"
          role="Technical Associate"
          description="I created a full-stack web app that allowed users to log and track their health information over the course of a week."
          icon="/gdsc.svg"
          top={isMobile ? '650px' : '65.5vh'}
        />
      </div>
    </div>
  );
};

interface ExperienceItemProps {
  isMobile: boolean;
  isVisible: boolean;
  position: 'left' | 'right';
  date: string;
  company: string;
  role: string;
  description: string;
  icon: string;
  top: string;
}

const ExperienceItem = ({ 
  isMobile, isVisible, position, date, company, role, description, icon, top 
}: ExperienceItemProps) => {
  if (isMobile) {
    return (
      <div 
        className="absolute w-full left-0" 
        style={{ top }}
      >
        <div className="absolute left-3 -translate-x-1/2 flex items-center">
          <img 
            src={icon} 
            alt={company} 
            className={`
              w-8 h-8 
              transition-all duration-1000
              ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
            `}
          />
        </div>

        <div className={`
          w-[calc(100%-80px)] 
          min-h-[160px] 
          ml-[60px] 
          absolute 
          bg-[#C05200] 
          rounded-[20px] 
          transition-all 
          duration-1000
          ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
        `}>
          <div className={`
            absolute 
            left-4 
            top-3 
            text-[16px]
            font-inria 
            font-bold 
            text-white 
            transition-opacity 
            duration-1000 
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}>
            {company}
          </div>
          <div className={`
            absolute 
            left-4 
            top-8 
            text-[14px]
            font-inria 
            italic 
            text-white 
            transition-opacity 
            duration-1000 
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}>
            {role}
          </div>
          <div className={`
            absolute 
            left-4 
            top-[52px] 
            pr-4 
            text-[12px]
            font-inria 
            text-white 
            leading-tight 
            transition-opacity 
            duration-1000 
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}>
            {description}
          </div>
          <div className={`
            absolute 
            left-4 
            bottom-3 
            text-[12px]
            font-inria 
            italic
            text-white/80
            transition-opacity 
            duration-1000 
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}>
            {date}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`absolute w-full ${isMobile ? 'left-0' : ''}`} style={{ top }}>
      <div className={`
        absolute 
        ${position === 'left' ? 'left-[60.42%]' : 'left-[60.42%]'}
        flex items-center
      `}>
        {position === 'left' && (
          <span className={`
            absolute right-[calc(2.11vw+1.328vw)] whitespace-nowrap 
            text-[1.5vw]
            font-inria transition-opacity duration-1000 
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}>
            {date}
          </span>
        )}
        <div className={`
          w-[2.11vw] h-[2.11vw]
          bg-black rounded-full transition-all duration-1000 
          ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
        `} />
        {position === 'right' && (
          <span className={`
            absolute left-[calc(2.11vw+1.328vw)] whitespace-nowrap 
            text-[1.5vw]
            font-inria transition-opacity duration-1000 
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}>
            {date}
          </span>
        )}
      </div>

      {/* Experience Bubble */}
      <div className={`
        w-[23vw] h-[15vh] ${position === 'left' ? 'left-[66.9%]' : 'left-[33.16%]'}
        absolute bg-[#C05200] rounded-[20px] transition-all duration-1000
        ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
      `}>
        <div className={`
          absolute left-4
          ${isMobile 
            ? 'top-3 text-[16px]' 
            : 'top-[1.8vh] text-[min(2vh,1.5vw)]'
          }
          font-inria font-bold text-white transition-opacity duration-1000 
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}>
          {company}
        </div>
        <div className={`
          absolute left-4
          ${isMobile 
            ? 'top-8 text-[14px]' 
            : 'top-[5vh] text-[min(1.75vh,1.25vw)]'
          }
          font-inria italic text-white transition-opacity duration-1000 
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}>
          {role}
        </div>
        <div className={`
          absolute left-4 pr-4
          ${isMobile 
            ? 'top-[52px] text-[12px]' 
            : 'top-[8.5vh] text-[min(1.4vh,1.25vw)]'
          }
          font-inria text-white leading-tight transition-opacity duration-1000 
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}>
          {description}
        </div>
      </div>

      <div className={`
        absolute 
        ${position === 'left' ? 'left-[92%]' : 'left-[25%]'} 
        ${position === 'left' ? 'top-[2vh]' : 'top-[2vh]'}
        w-[3.91vw] h-[3.91vw] transition-all duration-1000 
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
      `}>
        <img src={icon} alt={company} className="w-full h-full" />
      </div>
    </div>
  );
};

export default Experience; 