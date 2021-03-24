// IMPACT PAGE

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Banner from '../../components/banner/';
import ConsolWayVideo from '../../components/consolway/';
import ecosystem from './ecosystem.jpg';
import impactchain from './impactchain.jpg';
import impactchain1 from './impactchain1.png';
import impactchain2 from './impactchain2.png';
import impactchain3 from './impactchain3.png';
import impactchain4 from './impactchain4.png';
import statbar from './statbar.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import Carousel from '../../components/carousel/';
import './style.css';

export default function ImpactPage() {

    return (

        <div>

            <Banner></Banner>

            <Container className="top">

                <div className="submenu">

                    <Grid container spacing={1}>

                        <Grid item xs={4}>
                            <a href="#mission"><Button variant="outlined" className="submenu-button">Mission</Button></a>
                        </Grid>

                        <Grid item xs={4}>
                            <a href="#ecosystem"><Button variant="outlined" className="submenu-button">Ecosystem</Button></a>
                        </Grid>

                        <Grid item xs={4}>
                            <a href="#impactChain"><Button variant="outlined" className="submenu-button">Impact Chain</Button></a>
                        </Grid>

                    </Grid>

                </div>

            </Container>

            <Container className="section">

                <Paper elevation={0} variant="outlined" id="mission">

                    <Grid container spacing={1}>

                        <Grid item xs={12} id="missionBox">

                            <Typography variant="h3" className="sectionHead">Our Mission</Typography>
                            <Typography variant="body1">
                                We believe there is enormous untapped energy, ingenuity, and talent
                                in communities that traditionally have been overlooked. Our mission
                                is to build an ecosystem that brings that talent "online" to both
                                create value to our customers and provide robust and sustainable career mobility.
                                </Typography>

                        </Grid>

                    </Grid>

                </Paper>

            </Container>

            <Container id="ecosystem" className="section">

                <Paper elevation={0}>

                    <Grid container spacing={1}>

                        <Grid item xs={12}>

                            <Typography variant="h3" className="sectionHead">Our Ecosystem</Typography>

                                <img alt="ecosystem" src={ecosystem} width="100%"/>

                        </Grid>

                    </Grid>

                </Paper>

            </Container>

            <Container className="section carouselBkg" maxWidth={false}>

                    <Grid container spacing={1}>

                        <Grid item xs={12}>

                            <ConsolWayVideo></ConsolWayVideo>

                        </Grid>

                    </Grid>

            </Container>


                <Container id="impactChain" className="section">

                    <Grid container spacing={1}>


                            <Grid item xs={12}>
                                    <Typography variant="h3" className="sectionHead">Our Impact Chain</Typography>
                            </Grid>

                            <Grid item xs={4} sm={6} md={12} id="impactChainGraphicBox">

                                <img alt="impact chain 1" src={impactchain1} width="25%" id="impactChain1" />
                                <img alt="impact chain 2" src={impactchain2} width="25%" id="impactChain2" />
                                <img alt="impact chain 3" src={impactchain3} width="25%" id="impactChain3" />
                                <img alt="impact chain 4" src={impactchain4} width="25%" id="impactChain4" />

                            </Grid>

                            <Grid container id="impactChainTextBox">

                                <Grid item xs={12} sm={12} md={3}>
                                    <Typography variant="body" component="h5" className="impactChainText">
                                        Outsourcing contract defines services & delivery requirements
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} sm={12} md={3}>
                                    <Typography variant="body" component="h5" className="impactChainText">
                                    We recruit, train and accredit local talent with academic partners
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} sm={12} md={3}>
                                    <Typography variant="body" component="h5" className="impactChainText">
                                        We deploy teams virtually or onsite with clients
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} sm={12} md={3}>
                                    <Typography variant="body" component="h5" className="impactChainText">
                                        We create operational and social value for corporate customers
                                    </Typography>
                                </Grid>

                            </Grid>

                    </Grid>

                </Container>

            <Container id="stats" className="section">

                <Paper elevation={0}>

                    <Grid container spacing={1}>

                        <Grid item xs={12}>

                            <Typography variant="h3" className="sectionHead">By The Numbers</Typography>


                            <img alt="statistics bar" src={statbar} width="85%" />


                        </Grid>

                    </Grid>

                </Paper>

            </Container>

        </div>
    )
}