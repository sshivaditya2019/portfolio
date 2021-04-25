import React from 'react';
import { useEffect, useState } from 'react';
import './app.css';
import getWindowDimensions from './valswind';
import main_s from 'images/main_ss.svg';
import main_bot from 'images/main-bot.svg';
import main_rt from 'images/main-rt.svg';



function App (){
    const size = useWindowSize();
    return (
        <div className="div-amin">
        <div><img src={main_rt} alt="LLoaded" className="img-rtt"/></div>
        <div><img src={main_s} alt="LLoaded" className="img-sss"/></div>
        <div><img src={main_bot} alt="LLoaded" className="img-bo"/></div>
        <div>
                
                <p>I'm Shivaditya, your<br></br> insightful developer</p>
               
        </div>
       
        </div>
    );
}
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

export default App;