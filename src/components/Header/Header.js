import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(({
    header: {
        background: 'none',
        color: "black"
    },
    title: {
        
    },
}));


const Header = () => {
    const classes = useStyles();

    return (

        <AppBar className={classes.header} >
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Jaben Naki
                </Typography>
                
            </Toolbar>
        </AppBar>

    );
};

export default Header;