import React from 'react';
import "./components.css";
import logo from "./../images/logo.png"

const Landing=()=> {
    return (
    <div className='component landing'>
        <img src={logo} alt="logo" />
        <h1>Elmeri <br/> Kinnunen</h1>
    </div>

    );
  }
  
  export default Landing;