import React, { useRef } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import $ from "jquery";

import Header from '../components/Header';
import MainContents from '../components/MainContents';
import SubContents from '../components/SubContents';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

function toggleDarkMode(e){

    $('#darkmode').click(function(){
        $('#darkmode-toggleButton').toggleClass('moveToRight');
    })
}

// add 'darkmode-css' class to 'root' <div> when the toggle button is clicked
const onButtonClick = () => {
    let darkmodeToggleButton = document.getElementById('darkmode-toggleButton');
    if(darkmodeToggleButton.classList.contains('moveToRight')){
        $('body').addClass('darkmode-css');
    } else {
        $('body').removeClass('darkmode-css');
    }
}; 

export default function Room() {
    const classes = useStyles();

    return (
            <div className={classes.root}>
                <Header />
                <i className="material-icons darkmode-icon">brightness_medium</i>
                <div id="darkmode" className="darkmode-wrapper" onClick={toggleDarkMode}>
                    <div onClick={onButtonClick} id="darkmode-toggleButton"></div>
                    </div>
                <Grid container spacing={3} id="room-container">
                    <Grid item xs={9}>
                        <MainContents />
                    </Grid>
                    <Grid item xs={3}>
                        <SubContents />
                    </Grid>
                </Grid>
            </div>
    );
}