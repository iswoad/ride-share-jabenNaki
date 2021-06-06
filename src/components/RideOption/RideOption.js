import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });


const RideOption = (props) => {

    const { rideType, image } = props.ride;
    const classes = useStyles();


    return (
<Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt=""
              height="100%"
              width = "100%"
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