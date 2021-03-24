import React from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';

export default function NavHeader () {

  return (

    <div>

      <nav>
      <header>

      <div id="smallScreenNavBar" className="menu align-center">
        <MenuIcon id="menuIcon" className="hideOnMedUp" onClick={handleMenuClick}></MenuIcon></div>
          <ul className="menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/people" activeClassName="selectedLink">People</NavLink>
            </li>
            <li>
              <NavLink to="/impact" activeClassName="selectedLink">Impact</NavLink>
            </li>
            <li>
              <NavLink to="/work" activeClassName="selectedLink">Work</NavLink>
            </li>
            <li>
              <NavLink to="/partners" activeClassName="selectedLink">Partners</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="selectedLink">Contact</NavLink>
            </li>
          </ul>
          </header>

        </nav>


    </div>

  )
}