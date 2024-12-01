import { useState, useEffect, useRef } from 'react';

const phrases = [
  "full stack software engineer.",
  "matcha enthusiast.",
  "problem solver."
];

const AboutMe = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
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
    <div ref={aboutRef} id="about" className="h-[50vh] -mt-[25vh] mb-[25vh]">
      <div className={`ml-[10vw] font-inria font-bold transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-[64px] leading-tight">
          Hi! I'm Patrick,<br />
          I'm a <span className="text-[#407A54]">{currentText}</span>
          <span className="animate-blink">|</span>
        </div>
        
        <div className="mt-8 text-[20px] font-normal max-w-[45vw] leading-relaxed">
          I'm currently a senior at the University of California, Davis,
          where I'm pursuing a Bachelor of Science degree in Computer
          Science. I love using software to create meaningful tools that
          can positively impact my community and improve people's lives.
          My biggest motivation in software development lies in its power
          to drive change and improve everyday experiences.
          
          <br /><br />
          Outside of coding, I enjoy skateboarding, cooking, rock climbing,
          and film photography.
          
          <br /><br />
          Currently, I'm a software engineer at the Innovation and Research
          Lab at UC Davis.
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 