const SocialBar = () => {
  return (
    <div className="fixed left-[2.8%] bottom-0 flex flex-col items-center">
      <div className="flex flex-col gap-4 mb-4">
        <a 
          href="https://www.linkedin.com/in/patrickhcnguyen" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
        </a>
        
        <a 
          href="https://github.com/patrickhcnguyen" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
        </a>
      </div>
      <div className="w-[2px] h-[10vh] bg-black"></div>
    </div>
  );
};

export default SocialBar; 