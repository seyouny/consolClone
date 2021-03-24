import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Merritt from "./merrittcollege.png";
import Mills from "./millscollege_logo.png";

import "./style.css";
import { Card } from "@material-ui/core";

const InfoType = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 500,
    fontSize: theme.typography.pxToRem(16),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

export default function Academicpartners () {

    return (
      <div>
        <Container className="academic-card-container" id="academic-sect">
          <Typography
            variant="h3"
            className="academic-area-header"
            style={{ textAlign: "center", fontWeight: "900" }}
          >
            Academic Partners
          </Typography>
          {/* <Typography
            variant="body1"
            style={{
              textAlign: "center",
              fontSize: "18px",
              paddingBottom: "45px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography> */}

          <Grid container spacing={1}>
            <Grid item xs={12} sm={3}></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              className="logo-grid"
              container
              direction="column"
            >
              <Card elevation={3} className="academic-card">
                <p style={{ textAlign: "center" }}>
                  <img src={Merritt} alt="logo" className="academic-logo1" />
                </p>
                <Container>
                  <div className="pop-div">
                    <InfoType
                      title={
                        <React.Fragment>
                          <Typography color="inherit"></Typography>
                          {
                            "The mission of Merritt College is to enhance the quality of life in the communities we serve by helping students to attain knowledge, master skills, and develop the appreciation, attitudes and values needed to succeed and participate responsibly in a democratic society and a global economy."
                          }
                        </React.Fragment>
                      }
                    >
                      <Button size="small" variant="outlined">
                        INFO
                      </Button>
                    </InfoType>
                  </div>
                </Container>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
}
