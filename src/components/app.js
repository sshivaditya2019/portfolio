import React from 'react';
import { useEffect, useState } from 'react';
import './app.css';
import main_s from '/Users/shivaditya/dev/react/portfolio/src/images/main_ss.svg';
import main_bot from '/Users/shivaditya/dev/react/portfolio/src/images/main-bot.svg';
import main_rt from '/Users/shivaditya/dev/react/portfolio/src/images/main-rt.svg';




function App (){
    return (
        <div className="div-amin">
        <p>I'm Shivaditya, your<br></br> insightful developer</p> 
        <div><img src={main_rt} alt="LLoaded" className="img-rtt"/></div>
        <div><img src={main_s} alt="LLoaded" className="img-sss"/></div>
        <div><img src={main_bot} alt="LLoaded" className="img-bo"/></div>
        
        </div>
    );
}

export default App;