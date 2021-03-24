// NEWS PAGE
// IMPACT PAGE

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Banner from '../../components/banner/';
import './style.css';

export default function NewsPage() {

    return (

        <div>

            <Banner></Banner>

            <Container className="main">

                <div className="submenu">

                    <Grid container spacing={1}>

                        <Grid item xs={4}>
                            <Button variant="outlined" className="submenu-button">Blog</Button>
                        </Grid>

                        <Grid item xs={4}>
                            <Button variant="outlined" className="submenu-button">Press Releases</Button>
                        </Grid>

                        <Grid item xs={4}>
                            <Button variant="outlined" className="submenu-button">Fact Sheet</Button>
                        </Grid>

                    </Grid>

                </div>

                {/* BUILD ELEMENTS BELOW HERE. FEEL FREE TO EDIT THE ITEMS, JUST A TOOLKIT. */}

                <div id="founderdiv">

                    <Paper className="padded-section">

                        <Grid container spacing={1}>

                            <Grid item xs={12}>

                                <Typography variant="h3">Press Release</Typography>
                                <Typography variant="body1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                euismod in pellentesque. Pellentesque id nibh tortor id aliquet lectus proin.
                                Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Egestas
                                integer eget aliquet nibh praesent tristique. Imperdiet massa tincidunt nunc pulvinar sapien et.
                                Vel turpis nunc eget lorem dolor sed viverra. Montes nascetur ridiculus mus mauris vitae.
                                Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Ultricies mi quis hendrerit
                                dolor magna. Dolor morbi non arcu risus quis varius. Fames ac turpis egestas integer.
                                Amet nisl purus in mollis nunc sed. Neque viverra justo nec ultrices dui sapien eget
                                mi proin.

                                </Typography>

                            </Grid>

                        </Grid>

                    </Paper>

                </div>



            </Container>



        </div>
    )
}