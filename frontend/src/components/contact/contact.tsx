import { useRef, useState, useEffect } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={contactRef} id="contact" className="h-[50vh] relative flex justify-center">
      <div className={`absolute top-[-35vh] text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}>
        <div className="text-[64px] leading-tight font-inria font-bold">
          Contact Me
        </div>
        <div className="text-[20px] font-inria mt-[3.37vh] whitespace-nowrap">
          Please reach out to me directly at{' '}
          <a 
            href="mailto:patricknguyen714@gmail.com?subject=Portfolio Contact&body=Hi Patrick,"
            className="underline hover:opacity-80"
          >
            patricknguyen714@gmail.com
          </a>
          {' '}or through this form
        </div>
        
        {/* Form Container */}
        <div className="mt-[3.37vh] flex flex-col items-center gap-[2vh]">
          <input 
            type="email"
            placeholder="Your email"
            className="w-[25vw] h-[7vh] bg-[#FFFFFF] rounded-[15px] px-4 font-inria"
          />
          
          <textarea 
            placeholder="Your message"
            className="w-[25vw] h-[29vh] bg-[#FFFFFF] rounded-[15px] p-4 font-inria resize-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact; 