import React, {useState} from 'react';
import {Staff} from './staff';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Popover from '@material-ui/core/Popover';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { makeStyles } from "@material-ui/core/styles";
import $ from 'jquery';
import './style.css';

const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

const StaffCards = ({staff}) => {

    // const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
            <section className="staffCards" maxWidth={false}>

            {Staff.map((staff, index) => {
                    return (
                        <div key={index}>

                            <Grid item>

                            <Card className="staffCard">
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt={staff.lastName}
                                height="180"
                                image={staff.image}
                                title={staff.firstName}
                                />                
                                <CardContent className="titleWrapper">
                                <Typography variant="h5" component="h2" className="name">
                                    {staff.firstName} {staff.lastName}
                                </Typography>
                
                                <Typography variant="body1" component="h3" className="title">
                                    {staff.title}
                                </Typography>
                
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <a size="small" color="primary" href={"mailto:" + staff.email}>
                                <EmailIcon></EmailIcon>
                                </a>
                                <a size="small" color="primary" target="_blank" href={staff.linkedIn}>
                                <LinkedInIcon></LinkedInIcon>
                                </a>
                                <a size="small" color="primary" target="_blank" onClick={handleClick}>
                                <AccountBoxIcon></AccountBoxIcon>
                                </a>
                            </CardActions>

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
                                    {staff.bio}
                                    </Typography>
                                </Popover>
                
                            </Card>
                
                            </Grid>
                        </div>
                    )

            })
        }
            </section>
    )
}

export default StaffCards;
