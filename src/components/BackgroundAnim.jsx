import React, { useEffect, useRef, useState } from "react";
import BackgroundAnimStyles from "../styles/BackgroundAnimStyles";

const BackgroundAnim = () => {
  const skyRef = useRef();
  const seaRef = useRef();

  const [sunRiseHeight, setSunRiseHeight] = useState(0);

  useEffect(() => {
    [skyRef, seaRef].forEach(({ current }) => {
      current?.pauseAnimations();
    });
    function rise(e) {
      const windowHeight = window.innerHeight;
      const totalScrollHeight = document.body.scrollHeight - windowHeight;
      const currentScrollHeight = window.scrollY;
      const scrolledHeightRatio = currentScrollHeight / totalScrollHeight;
      const currentAnimationTime = scrolledHeightRatio * 24;

      [skyRef, seaRef].forEach(({ current }) => {
        current?.unpauseAnimations();
        current?.setCurrentTime(currentAnimationTime);
        current?.pauseAnimations();
      });

      if (scrolledHeightRatio <= 0.5)
        setSunRiseHeight(scrolledHeightRatio * windowHeight);
      else setSunRiseHeight(windowHeight - scrolledHeightRatio * windowHeight);
    }

    window.addEventListener("scroll", rise);
    return () => {
      window.removeEventListener("scroll", rise);
    };
  }, []);
  return (
    <BackgroundAnimStyles>
      <div className="landscape">
        <svg ref={skyRef} width="100%" height="51vh" id="aero">
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop stopColor="rgb(0,0,12)" offset="0%" id="zenith">
              <animate
                attributeName="stop-color"
                dur="24s"
                values="
                #040b3c;
                #192861;
                #5b2c83;
                #f06b7e;
                #efeebc;
                #74d4cc;
                #74d4cc;
                #74d4cc;
                #74d4cc;
                #efeebc;
                #fee154;
                #f06b7e;
                #5b2c83;
                #192861;
                #040b3c"
                repeatCount="indefinite"
              />
              <animate
                attributeName="offset"
                dur="24s"
                values="0;.85;.6;.1;0;0;0;0;0;.01;0;0;0;0;0;0;0;0;0;0;.3,.5,.8,0"
                repeatCount="indefinite"
              />
            </stop>

            <stop stopColor="rgb(0,0,12)" offset="100%" id="horizon">
              <animate
                attributeName="stop-color"
                dur="24s"
                values="
                #040b3c;
                #192861;
                #f06b7e;
                #f06b7e;
                #f06b7e;
                #f06b7e;
                #fee154;
                #efeebc;
                #74d4cc;
                #74d4cc;
                #74d4cc;
                #74d4cc;
                #74d4cc;
                #efeebc;
                #fee154;
                #f06b7e;
                #f06b7e;
                #f06b7e;
                #f06b7e;
                #192861;
                #040b3c;
                "
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <rect
            id="sky"
            x="0"
            y="0"
            width="100%"
            height="100%"
            style={{ fill: "url(#skyGradient)" }}
          />
        </svg>
        <svg ref={seaRef} width="100%" id="sea" height="50vh">
          <linearGradient id="seagrad" x1="50%" y1="50%" x2="0%" y2="50%">
            <stop stopColor="rgb(0,0,12)" offset="0%" id="zenith">
              <animate
                attributeName="stop-color"
                dur="24s"
                values="#003972;#016792;#12a1c0;#12a1c0;#12a1c0;#12a1c0;#12a1c0;#12a1c0;#12a1c0;#12a1c0;#016792;#003972;"
                repeatCount="indefinite"
              />
              <animate
                attributeName="offset"
                dur="24s"
                values="0;.85;.6;.1;0;0;0;0;0;.01;0;0;0;0;0;0;0;0;0;0;.3,.5,.8,0"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <rect
            id="sky"
            x="0"
            y="0"
            width="100%"
            height="100%"
            style={{ fill: "url(#seagrad)" }}
          />
        </svg>

        <div className="mountain"></div>
        <div className="mountain mountain-2"></div>
        <div className="mountain mountain-3"></div>
        <div className="sun-container sun-container-1"></div>
        <div className="sun-container">
          <div
            style={{
              transform: `translateY(-${sunRiseHeight}px)`,
            }}
            className="sun"
          ></div>
        </div>
        <div className="cloud"></div>
        <div className="cloud cloud-1"></div>
        <div className="light"></div>
        <div className="light light-1"></div>
        <div className="light light-2"></div>
        <div className="light light-3"></div>
        <div className="light light-4"></div>
        <div className="light light-5"></div>
        <div className="light light-6"></div>
        <div className="light light-7"></div>
        <div className="water"></div>
        <div className="splash"></div>
        <div className="splash delay-1"></div>
        <div className="splash delay-2"></div>
        <div className="splash splash-4 delay-2"></div>
        <div className="splash splash-4 delay-3"></div>
        <div className="splash splash-4 delay-4"></div>
        <div className="splash splash-stone delay-3"></div>
        <div className="splash splash-stone splash-4"></div>
        <div className="splash splash-stone splash-5"></div>
        <div className="lotus lotus-1"></div>
        <div className="lotus lotus-2"></div>
        <div className="lotus lotus-3"></div>
        <div className="front">
          <div className="stone"></div>
          <div className="grass"></div>
          <div className="grass grass-1"></div>
          <div className="grass grass-2"></div>
          <div className="reed"></div>
          <div className="reed reed-1"></div>
        </div>
      </div>
    </BackgroundAnimStyles>
  );
};

export default BackgroundAnim;
