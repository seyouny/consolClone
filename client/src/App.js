import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import HomePage from './pages/home/';
import PeoplePage from './pages/people/';
import ImpactPage from './pages/impact/';
import WorkPage from './pages/work/';
import PartnersPage from './pages/partners/';
import NewsPage from './pages/news/';
import ContactPage from './pages/contact/';
import Footer from './components/footer/index';
import Link from '@material-ui/core/Link';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import $ from 'jquery';
import Banner from "./components/banner"


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#44719d',
      main: '#164e85',
      dark: '#0f365d',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e3873c',
      main: '#dd690c',
      dark: '#6c0e23',
      contrastText: '#561643',
    },
  },
});

function App() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        // document.getElementById("menu").style.backgroundColor = "black";
        document.getElementById("menu").classList.add('mobileMenu');

    }
    else{
        document.getElementById("menu").classList.remove('mobileMenu');
        // document.getElementById("menu").style.backgroundColor = "transparent";

    }
  }


    return (

      <div className="App">

        <Router>

          <nav id='navBar' className="header-outer">
            <div id="smallScreenNavBar" className="hideOnMedUp header-inner responsive-wrapper">
              <MenuIcon id="menuIcon" className="hideOnMedUp" onClick={handleMenuClick}></MenuIcon></div>
            <ul className="menu" id='menu'>
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
          </nav>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem><a href="/">Home</a></MenuItem>
            <MenuItem><a href="/people">People</a></MenuItem>
            <MenuItem><a href="/work">Work</a></MenuItem>
            <MenuItem><a href="/impact">Impact</a></MenuItem>
            <MenuItem><a href="/partners">Partners</a></MenuItem>
            <MenuItem><a href="/contact">Contact</a></MenuItem>
          </Menu>

          <Switch>

            <Route exact path="/" component={HomePage} />
            <Route exact path="/people" component={PeoplePage} />
            <Route exact path="/impact" component={ImpactPage} />
            <Route exact path="/work" component={WorkPage} />
            <Route exact path="/partners" component={PartnersPage} />
            <Route exact path="/news" component={NewsPage} />
            <Route exact path="/contact" component={ContactPage} />

          </Switch>
        </Router>

        <Footer></Footer>

      </div>
    );
  }

  export default App;
