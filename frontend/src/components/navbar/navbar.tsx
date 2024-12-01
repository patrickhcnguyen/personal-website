import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#9FC2B2] border-b border-black">
      <div className="mx-auto w-full h-[12.5vh] px-4 relative">
        <div className="absolute left-[3.44%] top-[50%] -translate-y-1/2 w-[121px] h-[39px] border border-black rounded-full flex items-center justify-center">
          <span className="text-black font-bold font-inria text-[14px]">
            patrick.nguyen
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

