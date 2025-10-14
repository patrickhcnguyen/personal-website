import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';

const phrases = [
  "full stack software engineer.",
  "matcha enthusiast.",
  "problem solver."
];

const AboutMe = () => {
  const isMobile = useIsMobile();
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [fadeAway, setFadeAway] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '-200px 0px' 
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        const fadeThreshold = window.innerHeight / 2;
        const newFadeAway = rect.top < -fadeThreshold;
        setFadeAway(newFadeAway);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (!isVisible) return;

    if (isTyping) {
      if (currentText !== phrases[currentPhraseIndex]) {
        timeout = setTimeout(() => {
          setCurrentText(phrases[currentPhraseIndex].slice(0, currentText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (currentText !== '') {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      } else {
        setCurrentPhraseIndex((current) => (current + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, currentPhraseIndex, isVisible]);

  return (
    <div ref={aboutRef} id="about" className={`min-h-[50vh] ${isMobile ? 'mb-[5vh]' : 'mb-[10vh]'} relative transition-opacity duration-700 ${fadeAway ? 'opacity-0' : 'opacity-100'}`}>
      <div className={`
        ${isMobile ? 'mx-[20px]' : 'ml-[10vw]'} 
        font-inria 
        font-bold 
        transition-opacity 
        duration-1000 
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}>
        <div className={`
          ${isMobile ? 'text-[36px]' : 'text-[64px]'}
          leading-tight
        `}>
          Hi! I'm Patrick,<br />
          I'm a <span className="text-[#407A54]">{currentText}</span>
          <span className="animate-blink">|</span>
        </div>
        
        <div className={`
          mt-8 
          font-normal 
          ${isMobile ? 'text-[16px] max-w-full' : 'text-[20px] max-w-[32vw]'}
          leading-relaxed
        `}>
          I'm a graduate at the University of California, Davis, where
          I'm earned a Bachelor of Science degree in Computer Science.
          I love using software to create meaningful tools that can
          positively impact my community and improve people's lives. My
          biggest motivation in software development lies in its power
          to drive change and improve everyday experiences.
          
          <br /><br />
          Outside of coding, I enjoy skateboarding, cooking, rock climbing,
          and film photography.
          
          <br /><br />
          Recently, I interned at a startup called eleven8 where I worked on an internal tool
          to help automate their sales process and create a more efficient way to manage their sales pipeline.
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 