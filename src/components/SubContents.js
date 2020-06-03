import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import OnlineUsersList from './OnlineUsers/OnlineUsersList';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#fff",
        position: "fixed",
        right: 0,
        height: '100vh',
        overflow: "hidden",
    },
  }));

export default function SubContents(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root} p={2}>
            <OnlineUsersList socket={props.socket} />            
        </Box>
    );
}