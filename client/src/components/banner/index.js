import React from 'react';
import logo from './logowhite.png';
import './style.css';

export default function Banner () {

  return (

    <div>
      <header className="sticky-shrinknav-header">

        <div className="brand">
        <img src={logo} alt="ConSol USA logo" width="35%"></img> 
        </div>

      </header>
    </div>

  )
}