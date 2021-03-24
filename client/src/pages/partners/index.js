// PARTNERS PAGE

import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Banner from "../../components/banner/";
import Talentpartners from "../../components/talent_partners";
import Trainingpartners from "../../components/training_partners";
import Academicpartners from "../../components/academic_partners";
import Technologypartners from "../../components/technology_partners";
import Govpartners from "../../components/government_partners";
import { makeStyles } from "@material-ui/core/styles";
import PageBreak from "../work/divider_blue_orange.png";

import "./style.css";

const useStyles = makeStyles({
  pageDiv: {
    paddingLeft: "0",
    paddingRight: "0",
  },
  divImage: {
    width: "100%",
    height: "100%",
  },
});

export default function PartnersPage() {

  const classes = useStyles();

  return (
    <div>
      <Banner></Banner>

      <Container className="partner-btns">
        <div className="submenu1">
          <Grid
            container
            spacing={1}
            className="btns-container"
            maxWidth="false"
          >
            {/* <Grid item xs={0} sm={0} md={1}></Grid> */}
            <Grid item xs={12} sm={4}>
              <Button
                // size="small"
                variant="outlined"
                className="submenu-button btn-space1"
                href="#talent-sect"
              >
                Talent
              </Button>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Button
                // size="small"
                variant="outlined"
                className="submenu-button btn-space2"
                href="#training-sect"
              >
                Training
              </Button>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Button
                // size="small"
                variant="outlined"
                className="submenu-button btn-space3"
                href="#academic-sect"
              >
                Academic
              </Button>
            </Grid>

            {/* <Grid item xs={12} sm={6}>
              <Button
                // size="small"
                variant="outlined"
                className="submenu-button btn-space4"
                href="#tech-sect"
              >
                Technology
              </Button>
            </Grid> */}

            {/* <Grid item xs={12} sm={6}>
              <Button
                // size="small"
                variant="outlined"
                className="submenu-button btn-space5"
                href="#p-area"
              >
                Government
              </Button>
            </Grid> */}
            {/* <Grid item xs={0} sm={0} md={1}></Grid> */}
          </Grid>
        </div>
      </Container>

      <Talentpartners></Talentpartners>

      <Trainingpartners></Trainingpartners>

      <Academicpartners></Academicpartners>

      {/* <Technologypartners></Technologypartners>

      <Govpartners></Govpartners> */}

      {/* <Container className={classes.pageDiv} maxWidth="false">
        <Grid container>
          <Grid item xs={12} className="workPageBreak">
            <img
              className={classes.divImage}
              src={PageBreak}
              alt="page graphic"
            ></img>
          </Grid>
        </Grid>
      </Container> */}
    </div>
  );
}
