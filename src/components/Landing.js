import React from 'react';
import "./components.css";
import logo from "./../images/logo.png"

const Landing=()=> {
    return (
    <div className='component landing'>
        <div className='leftBackround'>
            <img className='logo' src={logo} alt="logo" />
            
        </div>
    </div>

    );
  }
  
  export default Landing;