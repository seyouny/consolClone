// HOME/LANDING PAGE

import React from 'react';
import './style.css';
import logo from './logowhite-min.png';
import Border from './divider_orange_blue.png';
import ImageSlider from '../../components/carousel/imageslider';
import Button from "@material-ui/core/Button";
import { Slides } from '../../components/carousel/slides';

export default function HomePage() {

  return (

    <div>
      
          <ImageSlider slides={Slides} />

            <img className="herobrand" src={logo} alt="ConSol USA logo"></img>

            <Button size="large" variant="contained" id="newsBtn" className="frontButton"><a href="/news">News</a></Button>
            <Button size="large" variant="contained" id="hire" className="frontButton">Hire Us</Button>
            <Button size="large" variant="contained" id="work" className="frontButton">Work For Us</Button>

          <div>
            <img src={Border} alt="border curve" className="border"></img>
          </div>

    </div>

  )
}