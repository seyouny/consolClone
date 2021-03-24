// PEOPLE PAGE

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Banner from '../../components/banner/';
import Founder from './founder.jpg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Modal from '@material-ui/core/Modal';
import PageGraphic from '../../components/divider';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import Grow from '@material-ui/core/Grow';
import BlueArc from '../../components/bluearc';
import MaroonArc from '../../components/maroonarc';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import StaffCards from '../../components/staffcards';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './style.css';


export default function PeoplePage() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div>

      <Banner></Banner>

      {/* ================= SUBMENU ================= */}

      <Container className="top">

        <div className="submenu">

          <Grid container spacing={1}>

            <Grid item xs={12} sm={6} md={3}>
            <a href="#founder"><Button variant="outlined" className="submenu-button">Founder</Button></a>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
            <a href="#staffContainer"><Button variant="outlined" className="submenu-button">Leaders</Button></a>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
            <a href="#board"><Button variant="outlined" className="submenu-button">Board</Button></a>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
            <a href="#advisors"><Button variant="outlined" className="submenu-button">Advisors</Button></a>
            </Grid>

          </Grid>

        </div>

      </Container>

      <Container id="founder">

        <Grid container spacing={1}>

          {/* ================= FOUNDERS STORY ================= */}

          <Grid item xs={8}>

            <Typography variant="h3" className="sectionHead">Founder's Story</Typography>
            <Typography variant="body1"><i>From humble beginnings...</i></Typography>

            <Typography variant="body1" paragraph>
              ConSol USA's founder is a global entrepreneur who, himself, has taken the journey of crossing the opportunity divide.  Born into poverty, he went from a high school dropout working as a housepainter, joined the military at age 17, and studied during his military service, graduating Summa Cum Laude in Behavioral Science from State University of New York Institute of Technology. He then took his first corporate roles, first in HR then in Sales & Marketing, after which he moved into consulting a few years later, where he was exposed to his first international experience. After emigrating to Switzerland to build his consulting practice, he found his first entrepreneurial opportunity. Thirty years later his journey took him from being a housepainter to a dual-national, bi-lingual, global technology entrepreneur who has lived and worked on four continents. <br></br>
            </Typography>
            <Typography variant="body1" paragraph>
              After returning to the US, Robert spent over two years working closely with youth development non-profits, philanthropists, foundations, corporations, and technology training organizations. From this work, it was clear that a new paradigm was needed, one that meant bringing together all of the key elements that would provide overlooked talent with a full runway from which to take off... in one holistic ecosystem.  None existed, so he founded ConSol USA to build it.<br></br>
            </Typography>
            <Typography variant="body1" paragraph>
              Robert's journey has given him a unique perspective on our mission, based on the absolute belief that he is in no way unique... there are literally millions of people who have the same talent, drive, and capability, but have not yet had the opportunity to grow to their potential. He has an intimate understanding of the people whose lives ConSol USA was founded to change. <br></br>
            </Typography>
            <Typography variant="body1" paragraph>
              His profound desire is to provide a platform through which people like the younger version of himself can become the older version of himself; creating and sharing value in communities that are not fully engaged, but can, should, and will be.
            </Typography>

          </Grid>

          <Grid item xs={1}>
          </Grid>

          <Grid item xs={3}>
            <img src={Founder} alt="Robert Tibbs" className="headshot" width="100%" />
          </Grid>

        </Grid>

      </Container>


      {/* ================= SECTION DIVIDER ================= */}

      <PageGraphic></PageGraphic>

      {/* ================= STAFF PHOTOS MAPPED VERSION================= */}

      <Container id="staffContainer" maxWidth={false}>

        <Grid container spacing={1}>

          <Grid item xs={12}>
          <Typography 
            variant="h3"
            style={{ textAlign: "center", color: "white", paddingBottom: "10px" }}
          >Staff</Typography>
          </Grid>
  
          <StaffCards></StaffCards>

        </Grid>

      </Container>

      {/* ================= SECTION DIVIDER ================= */}

      <BlueArc></BlueArc> 

      {/* =================== BOARD =================== */}

      <Container id="board" className="section">
        <Grid container spacing={1}>

        <Grid item xs={12}>
        <Typography 
          variant="h3"
          className="sectionHead"
        >Board</Typography>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={0} variant="outlined" className="boardList">
            <Typography variant="body1">
              <List>
                <ListItem>
                Chairman<br></br>
                Robert Tibbs<br></br>
                Founder & CEO<br></br>
                ConSol USA</ListItem>

                <ListItem>
                Jim Agnew<br></br>
                VP Corporate Development<br></br>
                Village MD</ListItem>

                <ListItem>
                Dr. Taiwo Kayode<br></br>
                Chief Consulting Engineer<br></br>
                Exxon Mobile</ListItem>

                <ListItem>
                Vice Chairman<br></br>
                Demola Eleso<br></br>
                Chairman<br></br>
                Contact Solutions Ltd</ListItem>

                <ListItem>
                Tom Knight<br></br>
                Chief Operating Officer<br></br> 
                Genesys Work</ListItem>

                <ListItem>
                Mars Shah<br></br>
                Chief Operating Officer<br></br>
                ConSol USA</ListItem>

                <ListItem>
                Dr. Marc Spencer <br></br>
                CEO <br></br>
                Summer Search</ListItem>
              </List>
            </Typography>
          </Paper>
        </Grid>


        </Grid>
      </Container>

{/* ================= SECTION DIVIDER ================= */}

      <MaroonArc></MaroonArc>

{/* =================== ADVISORS =================== */}

      <Container id="advisors" className="section">
        <Grid container spacing={1}>

        <Grid item xs={12}>
        <Typography 
          variant="h3"
          className="sectionHead"
          style={{ color: "white" }}
        >Advisors</Typography>
        </Grid>

          <Grid item xs={12}>
            <Paper elevation={0} variant="outlined" className="boardList">
              <Typography variant="body1">
                <List>
                  <ListItem>
                  Ralph Loura<br></br>
                  SVP/CIO<br />
                  Lumentum</ListItem>

                  <ListItem>
                  Emily Schaffer<br />
                  Managing Director<br />
                  Year Up</ListItem>

                  <ListItem>
                  Randy Lewis<br />
                  Partner - Wilson Sonsini<br /> 
                  Goodrich & Rosati</ListItem>

                  <ListItem>
                  Roberto Romano<br />
                  Former VP Enterprise Partnerships<br /> 
                  Mastercard</ListItem>

                  <ListItem>
                  Paul Musselman<br />
                  Managing Director <br />
                  Alvarez & Marsal</ListItem>

                  <ListItem>
                  Dr. Jahanzeb Sherwani<br />
                  Founder and CEO<br />
                  Screenhero</ListItem>

                  <ListItem>
                  Keith Rosmarin<br />
                  Registered Industrial Psychologist</ListItem>
                </List>
              </Typography>
            </Paper>
          </Grid>


        </Grid>
      </Container>

    </div>

  )
}