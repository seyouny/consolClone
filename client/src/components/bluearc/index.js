import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// import PageBreak from "./page_graphic_blue_orange.png";
import PageBreak from "./bluearc.png";
import { makeStyles } from "@material-ui/core/styles";
import './style.css';


export default function BlueArc () {

    return (
      <div>
          <img
              className="bluearc"
              src={PageBreak}
              alt="page graphic"
          ></img>
      </div>
    )
  }