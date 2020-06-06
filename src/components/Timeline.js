import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        fontFamily: 'Roboto'    
    },
    typing: {
        position: "fixed",
        bottom: "100px"
    },
    messages: {
        height: "70vh",
        overflow: "scroll",
        '& li' :{
            marginBottom: '10px'
        }    
    }
  });

  

export default function Timeline(props) {
    const classes = useStyles();

    return (
        <Box m={2} className={classes.root}>
            <ul id="messages" className={classes.messages}></ul>
            <div className={classes.typing} id="user-is-typing-message"></div>
        </Box>
    );
}