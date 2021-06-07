import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 280,
      maxHeight: 280,
      margin: 'auto'
    },
    media:{
      width: '100%',
      height: 200,
      objectFit: 'cover'
    }
  });


const RideOption = (props) => {

    const { rideType, image } = props.ride;
    const classes = useStyles();

    const handleRideSelect = () =>{
      console.log('ride clicked')
    }

    return (
      
          <Card onClick = {() => handleRideSelect()} className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className = {classes.media}
                    alt={rideType}
                    image={image}
                    title=""
                    object-fit="contain"
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {rideType}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
      
    );
};

export default RideOption;