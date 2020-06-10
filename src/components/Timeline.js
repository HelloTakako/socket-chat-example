import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        fontFamily: 'Roboto'    
    },
    typing: {
        position: "fixed",
        bottom: "70px"
    },
    messages: {
        height: "75vh",
        overflow: "scroll",
        '& li' :{
            marginBottom: '10px'
        }    
    }
  });

export default function Timeline() {
    const classes = useStyles();

    return (
        <Box m={2} className={classes.root}>
            <ul id="messages" className={classes.messages}></ul>
            <div className={classes.typing} id="user-is-typing-message"></div>
        </Box>
    );
}