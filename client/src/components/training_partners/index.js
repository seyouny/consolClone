import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
// import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Perscholas from "./perscholas_logo.jpg";
import Bayvalleytech from "./bayvalleytech_logo.jpg";
import Npower from "./npower_logo.jpg";
import OrangeArc from "./page_graphic_arc_orange.png";

import "./style.css";
import { Card } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   typography: {
//     padding: theme.spacing(2),
//   },
// }));

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

const InfoType = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 500,
    fontSize: theme.typography.pxToRem(16),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

export default function Trainingpartners() {

  const classes = useStyles();

  // const classes = useStyles();
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;

    return (
      <div>
        <Grid container>
          <Grid item xs={12} className="workPageBreak">
            <img
              className={classes.divImage}
              src={OrangeArc}
              alt="page graphic"
            ></img>
          </Grid>
        </Grid>

        <Container
          className="training-card-container"
          maxWidth="false"
          id="training-sect"
        >
          <Container>
            <Typography
              variant="h3"
              className="training-area-header"
              style={{ textAlign: "center", fontWeight: "900" }}
            >
              Training Partners
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
              <Grid
                item
                xs={12}
                sm={4}
                className="logo-grid"
                container
                direction="column"
              >
                <Card elevation={3} className="train-card">
                  <img src={Perscholas} alt="logo" className="train-logo1" />
                  <Container>
                    <div className="pop-div">
                      <InfoType
                        title={
                          <React.Fragment>
                            <Typography color="inherit"></Typography>
                            {
                              "At Per Scholas, we believe a thriving workforce starts with equitable access to education. By providing skills training and access to employer networks to individuals often excluded from tech careers, Per Scholas envisions a technology workforce as diverse as the customers it serves."
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

              <Grid
                item
                xs={12}
                sm={4}
                className="logo-grid"
                container
                direction="column"
              >
                <Card elevation={3} className="train-card">
                  <img src={Bayvalleytech} alt="logo" className="train-logo2" />
                  <Container>
                    <div className="pop-div">
                      <InfoType
                        title={
                          <React.Fragment>
                            <Typography color="inherit"></Typography>
                            {
                              "Bay Valley Tech offers free and low-cost coding programs for students focused on web-based development languages ranging from HTML / CSS to JavaScript and more."
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

              <Grid
                item
                xs={12}
                sm={4}
                className="logo-grid"
                container
                direction="column"
              >
                <Card elevation={3} className="train-card">
                  <img src={Npower} alt="logo" className="train-logo3" />
                  <Container>
                    <div className="pop-div">
                      <InfoType
                        title={
                          <React.Fragment>
                            <Typography color="inherit"></Typography>
                            {
                              "NPower creates pathways to economic prosperity by launching digital careers for military veterans and young adults from underserved communities."
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
        </Container>

        <Grid container>
          <Grid item xs={12} className="train-orange-arc-bottom">
            <img
              className={classes.divImage}
              src={OrangeArc}
              alt="page graphic"
            ></img>
          </Grid>
        </Grid>
      </div>
    );
}
