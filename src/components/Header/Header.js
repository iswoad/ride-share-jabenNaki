import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Grid, IconButton } from '@material-ui/core';




const useStyles = makeStyles(({
    header: {
        background: 'none',
        color: "black"
    },
    navBtn: {
        textDecoration: 'none'
    }

}));


const Header = () => {
    const classes = useStyles();

    return (

        <AppBar className={classes.header} >
            <Toolbar>
                <Grid justify="space-between" // Add it here :)
                    container
                    spacing={24}>
                    <Grid item>
                        <Typography variant="h6" className={classes.title}>
                            Jaben Naki
                        </Typography>
                    </Grid>
                    <Grid>
                        <div>
                            <IconButton>
                                <Link to="/home">Home</Link>
                            </IconButton>
                            <IconButton>
                                <Link to="/destination">destination</Link>
                            </IconButton>
                            <IconButton>
                                <Link to="/login">Login</Link>
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>






            </Toolbar>
        </AppBar>

    );
};

export default Header;