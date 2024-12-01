import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#9FC2B2] border-b border-black">
      <div className="mx-auto w-full h-[12.5vh] px-4 relative">
        <div 
          onClick={scrollToTop}
          className="absolute left-[3.44%] top-[50%] -translate-y-1/2 w-[121px] h-[39px] border border-black rounded-full flex items-center justify-center cursor-pointer hover:bg-black/5 transition-colors"
        >
          <span className="text-black font-bold font-inria text-[14px]">
            patrick.nguyen
          </span>
        </div>

        {/* Desktop View*/}
        <div className="absolute left-[54.69%] top-[50%] -translate-y-1/2 hidden lg:block">
          <span className="text-black font-bold font-inria text-[14px] whitespace-nowrap">
            About Me
          </span>
          <span className="absolute left-[7.8125vw] text-black font-bold font-inria text-[14px] whitespace-nowrap">
            Experience
          </span>
          <span className="absolute left-[15.625vw] text-black font-bold font-inria text-[14px] whitespace-nowrap">
            Projects
          </span>
          <span className="absolute left-[23.4375vw] text-black font-bold font-inria text-[14px] whitespace-nowrap">
            Contact
          </span>
          <span className="absolute left-[31.25vw] text-black font-bold font-inria text-[14px] whitespace-nowrap">
            More!
          </span>
          <span className="absolute left-[39.0625vw] text-black font-bold font-inria text-[14px] whitespace-nowrap">
            Resume
          </span>
        </div>

        {/* Mobile View */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute right-4 top-[50%] -translate-y-1/2 lg:hidden"
        >
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
          </div>
        </button>

        <div 
          className={`
            ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'} 
            absolute top-[12.5vh] right-0 w-48 bg-[#9FC2B2] border-l border-b border-black 
            transform transition-all duration-200 ease-in-out lg:hidden
            ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}
          `}
        >
          <div className="flex flex-col py-2">
            <span className="px-4 py-2 text-black font-bold font-inria text-[14px] cursor-pointer hover:bg-black/5">About Me</span>
            <span className="px-4 py-2 text-black font-bold font-inria text-[14px] cursor-pointer hover:bg-black/5">Experience</span>
            <span className="px-4 py-2 text-black font-bold font-inria text-[14px] cursor-pointer hover:bg-black/5">Projects</span>
            <span className="px-4 py-2 text-black font-bold font-inria text-[14px] cursor-pointer hover:bg-black/5">Contact</span>
            <span className="px-4 py-2 text-black font-bold font-inria text-[14px] cursor-pointer hover:bg-black/5">More!</span>
            <span className="px-4 py-2 text-black font-bold font-inria text-[14px] cursor-pointer hover:bg-black/5">Resume</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

