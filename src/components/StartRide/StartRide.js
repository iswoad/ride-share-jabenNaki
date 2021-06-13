import { Container } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import './StartRide.css';
import FakeData from '../../FakeData/FakeData.json';
import map from '../../images/Dhaka-google-maps.jpg';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';





const StartRide = () => {

    const { rideKey } = useParams();
    const selectedRide = FakeData.find(rd => rd.id == rideKey);
    const { rideType, image, seat, price } = selectedRide;
    console.log(selectedRide);


    return (
        <Container>
            <div style={{ marginTop: 80 }} className='twin-container'>
                <Container>
                    <div className="start-container">
                        <div className='divStyle'>
                            <h4> Uttara</h4>
                            <h4> Gulshan</h4>
                        </div>
                        <div className="bike">
                            <p><img style={{ height: '40px' }} src={image} alt="" /><span style={{ marginLeft: '20px' }}> {rideType}</span> <span style={{ marginLeft: '20px' }}> {seat}</span> <span style={{ marginLeft: '20px' }}> {price}</span></p>
                        </div>
                        <div className="bike">
                            <p><img style={{ height: '40px' }} src={image} alt="" /><span style={{ marginLeft: '20px' }}> {rideType}</span> <span style={{ marginLeft: '20px' }}> {seat}</span> <span style={{ marginLeft: '20px' }}> {price}</span></p>
                        </div>
                        <div className="bike">
                            <p><img style={{ height: '40px' }} src={image} alt="" /><span style={{ marginLeft: '20px' }}> {rideType}</span> <span style={{ marginLeft: '20px' }}> {seat}</span> <span style={{ marginLeft: '20px' }}> {price}</span></p>
                        </div>
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

export default StartRide;