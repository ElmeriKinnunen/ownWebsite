import React from 'react';
import "./components.css";
import logo from "./../images/logo.png"
import video from "./../images/landing_video.mp4"

const Landing=()=> {
    return (
    <div className='component landing'>
        <video id="landingVideo" autoPlay muted loop>
            <source src={video} type="video/mp4"/>
        </video>
        <img className='logo' src={logo} alt="logo" />
    </div>
        
    );
  }
  
  export default Landing;