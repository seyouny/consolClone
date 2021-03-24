// CONTACT PAGE

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Banner from '../../components/banner/';
import TextField from '@material-ui/core/TextField';
// import PageBreak from "./page_graphic_blue_orange.png";
import PageBreak from "../work/divider_blue_orange.png";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from "@material-ui/core/styles";
import $ from 'jquery';
import './style.css';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import { LensOutlined } from '@material-ui/icons';
init("user_HwMXwEHp0KORxnvgNKatv");


const useStyles = makeStyles({
  pageDiv: {
    paddingLeft: "0",
    paddingRight: "0",
  },
  // divImage: {
  //   width: "100%",
  //   marginTop: "-50%",
  //   zIndex: "100",
  // },
  divImage: {
    width: "100%",
    height: "100%",
    marginTop: "0"
  },
  formControl: {
    margin: 1,
    width: "200px",
  },
});

export default function ContactPage() {

    const classes = useStyles();

    const [region, setRegion] = React.useState('');
    const [interest, setInterest] = React.useState('');

    const submitBtn = $('#submitBtn');
    const contactForm = $('#contactForm');

    const handleChangeRegion = (event) => {
      setRegion(event.target.value);
    };

    const handleChangeInterest = (event) => {
      setInterest(event.target.value);
    };

    const getInputs = () => {
        var input, firstName, lastName, business, position, phone, email, interest, region;
      
          // alert('Submit button clicked');
          firstName = $('#firstName').val();
          lastName = $('#lastName').val();
          business = $('#business').val();
          position = $('#position').val();
          phone = $('#phone').val();
          email = $('#email').val();
          region = $('#region').val();
          interest = $('#interest').val();
          input = {
            'firstName': firstName,
            'lastName': lastName,
            'phone': phone,
            'email': email,
            'business': business,
            'position': position,
            'interest': interest,
            'region': region
          }
          console.log("Collected Input:", input)
          return input;
      }

    const testData = {
        firstName: 'Leslie',
        lastName: 'KnopeTest',
        business: 'City of Pawnee',
        position: 'Director of Parks & Rec',
        interest: 'explore partnership',
        region: 'West'
    }
    
    const submitInput = () => {

        contactForm.on('submit', function (event) {
                event.preventDefault();

                var userID='user_HwMXwEHp0KORxnvgNKatv';

                var answers = getInputs();
                // emailjs.sendForm('contact_service', 'consol-contact', '#contactForm');
                emailjs.send('contact_service', 'consol-contact', answers)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                    console.log('FAILED...', err);
                });

            })

    }

    // function sendEmail(e) {
    // e.preventDefault();

    // emailjs.sendForm('contact_service', 'consol-contact', e.target, 'HwMXwEHp0KORxnvgNKatv')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // }

    return (

        <div>

            <Banner></Banner>

            <Container>

                <Paper className="contactForm">

                    <Grid container spacing={1}>

                        <Grid item xs={12}>

                            <Typography variant="h3" className="contactHead">Contact Us</Typography>
                            <Typography variant="body1" className="contactHead">Thanks for stopping by. We'd love to hear from you. Give us a few details and we'll get right back to you.</Typography>

                            <form id="contactForm" noValidate autoComplete="off">

                                <TextField className="formBox" id="firstName" label="First Name" type="text" variant="outlined" />
                                <TextField className="formBox" id="lastName" label="Last Name" type="text" variant="outlined" />
                                <TextField className="formBox" id="business" label="Business Affiliation" type="text" variant="outlined" />
                                <TextField className="formBox" id="position" label="Position" type="text" variant="outlined" /><br />
                                <TextField className="formBox" id="phone" label="Phone" type="text" variant="outlined" />
                                <TextField className="formBox" id="email" label="Email" type="text" variant="outlined" />

                                <Tooltip 
                                title={          
                                <React.Fragment>
                                    <Typography>
                                    {"In which U.S. region is your project primarily located?"}
                                    </Typography>
                                </React.Fragment>
                                }
                                placement="top"
                                arrow 
                                aria-label="region">

                                <FormControl>
                                    <InputLabel id="region">Region</InputLabel>

                                    <Select
                                    className="formBox"
                                    variant="outlined"
                                    labelId="region-label"
                                    id="region-select"
                                    value={region}
                                    onChange={handleChangeRegion}
                                    label="Region"
                                    >
                                    <MenuItem value="">
                                        <em>TBD</em>
                                    </MenuItem>
                                    <MenuItem value="East">East</MenuItem>
                                    <MenuItem value="Midwest">Midwest</MenuItem>
                                    <MenuItem value="West">West</MenuItem>
                                    </Select>
                                    
                                </FormControl>
                                </Tooltip>


                                <Tooltip 
                                title={          
                                <React.Fragment>
                                    <Typography>
                                    {"What's the primary reason you're contacting us today?"}
                                    </Typography>
                                </React.Fragment>
                                }
                                placement="top"
                                arrow 
                                aria-label="region">

                                <FormControl
                                    width="200px">
                                    <InputLabel id="interest">Primary Interest</InputLabel>

                                    <Select
                                    className="formBox"
                                    variant="outlined"
                                    labelId="interest-label"
                                    id="interest-select"
                                    value={interest}
                                    onChange={handleChangeInterest}
                                    label="Primary Interest"
                                    >
                                    <MenuItem value="interest">
                                        <em>TBD</em>
                                    </MenuItem>
                                    <MenuItem value="customer">Outsource Your Work</MenuItem>
                                    <MenuItem value="job candidate">Work for ConSol USA</MenuItem>
                                    <MenuItem value="talent pipeline">Provide a Talent Pipeline</MenuItem>
                                    <MenuItem value="partner">Explore Partnership</MenuItem>
                                    <MenuItem value="learn more">Learn More</MenuItem>
                                    </Select>
                                    
                                </FormControl>
                                </Tooltip>

                                <TextField className="formBox message" id="message" label="Message" type="text" multiline rows={4} placeholder="Hi. What's on your mind?" variant="outlined" />

                                <Button id="submitBtn" variant="contained" type="submit" color="secondary" onClick={submitInput}>Submit</Button>

                            </form>

                        </Grid>

                    </Grid>

                </Paper>

            </Container>

            <Container className={classes.pageDiv} maxWidth="false">
                <Grid container>
                    <Grid item xs={12}>
                        <img
                            className={classes.divImage}
                            src={PageBreak}
                            alt="page graphic"
                        ></img>
                    </Grid>
                </Grid>
            </Container>



        </div>
    )
}