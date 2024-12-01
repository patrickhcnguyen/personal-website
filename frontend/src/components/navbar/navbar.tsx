import React from "react";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="w-full bg-[#9FC2B2] border-b border-black">
      <div className="mx-auto w-full h-[12.5vh] px-4 relative">
        <div 
          onClick={scrollToTop}
          className="absolute left-[3.44%] top-[50%] -translate-y-1/2 w-[121px] h-[39px] border border-black rounded-full flex items-center justify-center cursor-pointer hover:bg-black/5 transition-colors"
        >
          <span className="text-black font-bold font-inria text-[14px]">
            patrick.nguyen
          </span>
        </div>
        <span className="absolute left-[54.69%] top-[50%] -translate-y-1/2 text-black font-bold font-inria text-[14px]">
          About Me
        </span>
        <span className="absolute left-[62.5%] top-[50%] -translate-y-1/2 text-black font-bold font-inria text-[14px]">
          Experience
        </span>
        <span className="absolute left-[70.31%] top-[50%] -translate-y-1/2 text-black font-bold font-inria text-[14px]">
          Projects
        </span>
        <span className="absolute left-[78.12%] top-[50%] -translate-y-1/2 text-black font-bold font-inria text-[14px]">
          Contact
        </span>
        <span className="absolute left-[85.93%] top-[50%] -translate-y-1/2 text-black font-bold font-inria text-[14px]">
          More!
        </span>
        <span className="absolute left-[93.75%] top-[50%] -translate-y-1/2 text-black font-bold font-inria text-[14px]">
          Resume
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

