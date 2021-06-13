import React, { useEffect, useState } from 'react';
import './Home.css';
import fakeData from '../../FakeData/FakeData.json';
import RideOption from '../RideOption/RideOption';
import {  Container,  Grid, makeStyles } from '@material-ui/core';
import bgImage from '../../images/Bg.png'

const useStyles = makeStyles({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        
    },

    rideOptions: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    }
});

const Home = () => {
    const classes = useStyles();

    const [rides, setRides] = useState([]);
    useEffect(() => {
        setRides(fakeData)
    }, [])
    
    return (

        <div className={classes.root}>
            
                <Container className = {classes.rideOptions}>
                <Grid container spacing={1}>
                    {
                        rides.map(ride =>
                            <Grid item lg={3}>
                                <RideOption ride={ride} ></RideOption>
                            </Grid>
                        )
                    }
                </Grid>
                </Container> 
        </div>

    );
};

export default Home;