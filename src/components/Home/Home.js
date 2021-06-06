import React, { useEffect, useState } from 'react';
import './Home.css';
import fakeData from '../../FakeData/FakeData.json';
import RideOption from '../RideOption/RideOption';
import { Container, Grid } from '@material-ui/core';



const Home = () => {

    const [rides, setRides] = useState([]);
    useEffect(() => {
        setRides(fakeData)
    }, [])
    console.log(rides)
    return (
        <>
            <Container className = "home" maxWidth="md">
                <Grid container spacing={2}>
                    {
                        rides.map(ride =>
                            <Grid item lg={4}>
                                <RideOption ride={ride} ></RideOption>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </>
    );
};

export default Home;