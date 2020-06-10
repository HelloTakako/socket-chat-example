import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import $ from 'jquery';
import openSocket from 'socket.io-client';
const socket = openSocket.io('http://localhost:8080');

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

//when we capture a chat message event we’ll include it in the page
socket.on('chat message', function(msg){
    // messages 
    $('#messages').append($('<li>').html(`${msg.text} <span class="msg-time">${msg.time}</span>`));
    // scroll to the bottom of page
    const height = $('#messages').prop('scrollHeight');
    $('#messages').scrollTop(height);
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