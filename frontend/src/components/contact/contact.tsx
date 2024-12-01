import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_email: email,
          message: message,
          to_email: 'patricknguyen714@gmail.com'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        alert('Message sent successfully!');
        setEmail('');
        setMessage('');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <form onSubmit={handleSubmit} className="mt-[3.37vh] flex flex-col items-center gap-[2vh]">
          <input 
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-[25vw] h-[7vh] bg-[#FFFFFF] rounded-[15px] px-4 font-inria"
          />
          
          <textarea 
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-[25vw] h-[29vh] bg-[#FFFFFF] rounded-[15px] p-4 font-inria resize-none"
          />

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-[#FFFFFF] px-6 py-2 rounded-[15px] font-inria hover:opacity-80 transition-opacity disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
            <img src="/submit.svg" alt="Submit" className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 