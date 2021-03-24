import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Graphic from "./maroonarc.png";
import './style.css';


export default function MaroonArc () {

    return (
      <div>
          <img
              className="arc"
              src={Graphic}
              alt="page graphic"
          ></img>
      </div>
    )
  }