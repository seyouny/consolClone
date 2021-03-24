import React from 'react'
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Calgov from "./calgovbiz_logo.jpg";
import Oakland from "./oakland_logo.jpg";
import Dol from "./usdol_logo.png";

import "./style.css";

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

export default function Govpartners() {

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
        <Container className="gov-card-container" id="gov-sect">
          <Typography
            variant="h3"
            className="gov-area-header"
            style={{ textAlign: "center", fontWeight: "900" }}
          >
            Government Partners
          </Typography>
          <Typography
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
          </Typography>

          <Grid container spacing={5}>
            <Grid
              item
              xs={12}
              sm={4}
              className="logo-grid"
              container
              direction="column"
            >
              <img src={Calgov} alt="logo" className="gov-logo1" />
              <Container>
                <div className="pop-div">
                  <InfoType
                    title={
                      <React.Fragment>
                        <Typography color="inherit"></Typography>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        }
                      </React.Fragment>
                    }
                  >
                    <Button size="small" variant="outlined">
                      INFO
                    </Button>
                  </InfoType>
                </div>
                {/* <div className="pop-div">
                  <Button
                    size="small"
                    aria-describedby={id}
                    variant="contained"
                    color="white"
                    onClick={handleClick}
                  >
                    Info
                  </Button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Typography className={classes.typography}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                  </Popover>
                </div> */}
              </Container>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              className="logo-grid"
              container
              direction="column"
            >
              <img src={Oakland} alt="logo" className="gov-logo2" />
              <Container>
                <div className="pop-div">
                  <InfoType
                    title={
                      <React.Fragment>
                        <Typography color="inherit"></Typography>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        }
                      </React.Fragment>
                    }
                  >
                    <Button size="small" variant="outlined">
                      INFO
                    </Button>
                  </InfoType>
                </div>
                {/* <div className="pop-div">
                  <Button
                    size="small"
                    aria-describedby={id}
                    variant="contained"
                    color="white"
                    onClick={handleClick}
                  >
                    Info
                  </Button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Typography className={classes.typography}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                  </Popover>
                </div> */}
              </Container>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              className="logo-grid"
              container
              direction="column"
            >
              <img src={Dol} alt="logo" className="gov-logo3" />
              <Container>
                <div className="pop-div">
                  <InfoType
                    title={
                      <React.Fragment>
                        <Typography color="inherit"></Typography>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        }
                      </React.Fragment>
                    }
                  >
                    <Button size="small" variant="outlined">
                      INFO
                    </Button>
                  </InfoType>
                </div>
                {/* <div className="pop-div">
                  <Button
                    size="small"
                    aria-describedby={id}
                    variant="contained"
                    color="white"
                    onClick={handleClick}
                  >
                    Info
                  </Button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Typography className={classes.typography}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                  </Popover>
                </div> */}
              </Container>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
}
