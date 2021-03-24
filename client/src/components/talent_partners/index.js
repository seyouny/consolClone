import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
// import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import GenUSA from "./genusa_logo.jpg";
import Yearup from "./yearup_logo.jpg";
import Genesys from "./genesysworks_logo.jpg";
import Npower from "./npower_logo.jpg";

import "./style.css";
import { Card } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   typography: {
//     padding: theme.spacing(2),
//   },
// }));

const InfoType = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 500,
    fontSize: theme.typography.pxToRem(16),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

export default function Talentpartners () {

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
        <Container className="talent-card-container" id="talent-sect">
          <Typography
            variant="h3"
            className="talent-area-header"
            style={{ textAlign: "center", fontWeight: "900" }}
          >
            Talent Partners
          </Typography>
          {/* <Typography
            variant="body1"
            style={{
              textAlign: "center",
              fontSize: "18px",
              paddingBottom: "45px",
            }}
          >
            To access tens of thousands of career-ready people from underserved
            communities, we’ve partnered nationally with the country’s leading
            non-profit organizations focused on academic preparedness and
            workforce readiness for opportunity youth and veterans.
          </Typography> */}

          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              className="logo-grid"
              container
              direction="column"
            >
              <Card elevation={3} className="talent-card">
                <img src={GenUSA} alt="logo" className="talent-logo1" />
                <Container>
                  <div className="pop-div">
                    <InfoType
                      title={
                        <React.Fragment>
                          <Typography color="inherit"></Typography>
                          {
                            "We transform education to employment systems to prepare, place, and support people into life-changing careers that would otherwise be inaccessible."
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
              sm={6}
              md={3}
              className="logo-grid"
              container
              direction="column"
            >
              <Card elevation={3} className="talent-card">
                <img src={Yearup} alt="logo" className="talent-logo2" />
                <Container>
                  <div className="pop-div">
                    <InfoType
                      title={
                        <React.Fragment>
                          <Typography color="inherit"></Typography>
                          {
                            "Year Up's mission is to close the Opportunity Divide by ensuring that young adults gain the skills, experiences, and support that will empower them to reach their potential through careers and higher education."
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
              sm={6}
              md={3}
              className="logo-grid"
              container
              direction="column"
            >
              <Card elevation={3} className="talent-card">
                <img src={Genesys} alt="logo" className="talent-logo3" />
                <Container>
                  <div className="pop-div">
                    <InfoType
                      title={
                        <React.Fragment>
                          <Typography color="inherit"></Typography>
                          {
                            "Our mission is to provide pathways to career success for high school students in underserved communities through skills training, meaningful work experiences, and impactful relationships."
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
              sm={6}
              md={3}
              className="logo-grid"
              container
              direction="column"
            >
              <Card elevation={3} className="talent-card">
                <img src={Npower} alt="logo" className="talent-logo4" />
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
      </div>
    );
}
