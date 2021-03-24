import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// import PageBreak from "./page_graphic_blue_orange.png";
import Graphic from "./whitearc.png";
import { makeStyles } from "@material-ui/core/styles";
import './style.css';


export default function WhiteArc () {

    return (
      <div>
          <img
              src={Graphic}
              alt="page graphic"
          ></img>
      </div>
    )
  }