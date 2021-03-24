import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import PageBreak from "./page_graphic_blue_orange.png";
import { makeStyles } from "@material-ui/core/styles";
import './style.css';


export default function PageGraphic () {

    return (
      <div>
          <img
              className="divider"
              src={PageBreak}
              alt="page graphic"
          ></img>
      </div>
    )
  }