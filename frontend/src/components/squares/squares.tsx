import { useEffect, useState } from 'react';

const Squares = () => {
  const [greenVisible, setGreenVisible] = useState(false);
  const [brownVisible, setBrownVisible] = useState(false);
  const [yellowVisible, setYellowVisible] = useState(false);
  const [lightBrownVisible, setLightBrownVisible] = useState(false);
  const [redVisible, setRedVisible] = useState(false);

  useEffect(() => {
    const greenTimer = setTimeout(() => {
      setGreenVisible(true);
    }, 300);

    const brownTimer = setTimeout(() => {
      setBrownVisible(true);
    }, 600);

    const yellowTimer = setTimeout(() => {
      setYellowVisible(true);
    }, 900);

    const lightBrownTimer = setTimeout(() => {
      setLightBrownVisible(true);
    }, 1200);

    const redTimer = setTimeout(() => {
      setRedVisible(true);
    }, 1600);

    return () => {
      clearTimeout(greenTimer);
      clearTimeout(brownTimer);
      clearTimeout(yellowTimer);
      clearTimeout(lightBrownTimer);
      clearTimeout(redTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Brown Rectangle */}
      <div 
        className={`
          absolute 
          w-[15.08vw] 
          h-[34.74vh] 
          left-[10vw]
          top-[25.96vh]
          bg-[#6A5550]
          transition-all 
          duration-700
          ease-in-out
          origin-top
          ${brownVisible 
            ? 'opacity-100 scale-y-100' 
            : 'opacity-0 scale-y-0'
          }
        `}
      />

      {/* Green Square */}
      <div 
        className={`
          absolute 
          w-[20.39vw] 
          h-[26.68vh] 
          left-[calc(10vw+15.08vw+0.234vw)]
          top-[25.96vh]
          bg-[#407A54]
          transition-all 
          duration-700
          ease-in-out
          origin-right
          ${greenVisible 
            ? 'opacity-100 scale-x-100' 
            : 'opacity-0 scale-x-0'
          }
        `}
      />

      {/* Yellow Rectangle */}
      <div 
        className={`
          absolute 
          w-[14.69vw] 
          h-[7.57vh] 
          left-[calc(10vw+15.08vw+0.234vw)]
          top-[calc(25.96vh+26.68vh+0.361vh)]
          bg-[#FEC439]
          transition-all 
          duration-700
          ease-in-out
          origin-left
          ${yellowVisible 
            ? 'opacity-100 scale-x-100' 
            : 'opacity-0 scale-x-0'
          }
        `}
      />

      {/* Light Brown Rectangle */}
      <div 
        className={`
          absolute 
          w-[5.39vw] 
          h-[20.79vh] 
          left-[calc(10vw+15.08vw+0.234vw+14.69vw+0.234vw)]
          top-[calc(25.96vh+26.68vh+0.361vh)]
          bg-[#AA835C]
          transition-all 
          duration-700
          ease-in-out
          origin-top
          ${lightBrownVisible 
            ? 'opacity-100 scale-x-100' 
            : 'opacity-0 scale-y-0'
          }
        `}
      />

      {/* Red Rectangle */}
      <div 
        className={`
          absolute 
          w-[30.08vw] 
          h-[12.74vh] 
          left-[10vw]
          top-[calc(25.96vh+34.74vh+0.361vh)]
          bg-[#C03B2A]
          transition-all 
          duration-700
          ease-in-out
          origin-right
          ${redVisible 
            ? 'opacity-100 scale-x-100' 
            : 'opacity-0 scale-x-0'
          }
        `}
      />
    </div>
  );
};

export default Squares; 