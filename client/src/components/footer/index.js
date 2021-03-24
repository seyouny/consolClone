import React from 'react';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import './app.css';

export default function Footer() {

  return (
    <div className="footer">

        <Container id="footerContent">

            <Grid container spacing={1}>

                <Grid item xs={12} md={7} className='columnLeft'>

                    <h4>About Us</h4>
                    <p>ConSol USA is a for-profit company with a mission of positive financial and human impact.  
                        Some call us a social enterprise, but we aim to lead a new category of ecosystem-builder. 
                        We enlist diverse talent to deliver outsourced tech and ops services and create shared prosperity.  
                        </p>
                    <p>Diverse Tech Talent | Local Outsourcing | Profit with Social Impact</p>

                </Grid>

                <Grid item md={0}></Grid>


                <Grid item xs={12} sm={12} md={3} className='columnMiddle'>

                    <h4>Contact Us</h4>
                    <p><PhoneIcon className="icon"></PhoneIcon> (302) 401-6537</p>
                    <p><EmailIcon className="icon"></EmailIcon> info@consol-usa.com</p>
                    <p><RoomIcon className="icon"></RoomIcon> 8 The Green, Suite #8212<br></br> 
                    <span className="indent">Dover, DE 19901</span>
                    </p>

                </Grid>

                <Grid item xs={12} sm={2} className='columnRight'>

                    <h4>Follow Us</h4>
                    <LinkedInIcon fontSize="large" className="icon"></LinkedInIcon>
                    <FacebookIcon fontSize="large" className="icon"></FacebookIcon>
                    <TwitterIcon fontSize="large" className="icon"></TwitterIcon>
 
                </Grid>

            </Grid>
            
        </Container>

    </div>
  );
}