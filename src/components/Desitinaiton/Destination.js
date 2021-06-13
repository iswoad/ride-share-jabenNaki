import { Button, Container, makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Destination.css';
import map from '../../images/Dhaka-google-maps.jpg'
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const Destination = () => {
    const classes = useStyles();
    const { rideKey } = useParams();
    const history = useHistory();
    return (
        <Container>
            <div style={{ marginTop: 80 }} className='twin-container'>
                <Container>
                    <div className="destination-container">
                        <form className={classes.form}>
                            <Typography>From</Typography><br />
                            <TextField
                                required
                                id="start-location"
                                label="Type Location"
                                defaultValue="Uttara"
                                variant="filled"
                            />

                            <Typography><br />To</Typography><br />
                            <TextField
                                required
                                id="end-location"
                                label="Type Location"
                                defaultValue="Gulshan"
                                variant="filled"
                            />
                            <br /> <br />
                            <Button variant="contained" color="primary" onClick={() => history.push(`/startRide/${rideKey}`)}>
                                Confirm JabenNaki
                            </Button>
                        </form>
                    </div>
                </Container>

                <div className="map-container">
                <img style={{ height: '500px', width: '550px' }} src={map} alt="" />
                    {/* <Map google={this.props.google} zoom={14}>

                        <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                        <InfoWindow onClose={this.onInfoWindowClose}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </Map> */}
                </div>
            </div>
        </Container>
    );
};

export default Destination;