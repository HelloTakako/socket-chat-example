import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../components/Header';
import MainContents from '../components/MainContents';
import SubContents from '../components/SubContents';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#ddd",
    },
}));

export default function Room() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
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