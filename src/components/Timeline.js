import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import $ from 'jquery';

import io from 'socket.io-client';

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

    const socket = io();

    // socket.emit("joinRoomUser", document.cookie.slice(9, document.cookie.length));

    // Show message when a new user joined(to other users)
    socket.on('joinRoom', function(msg){
        // messages 
        $('#messages').append($('<li>').addClass('join-left-message').html(`${msg.text} <span class="msg-time">${msg.time}</span>`));
        // scroll to the bottom of page
        const height = $('#messages').prop('scrollHeight');
        $('#messages').scrollTop(height);
    });

    // show 'User is typing...' message
    socket.on('user typing', function(typingMsg){
        $('#user-is-typing-message').text(typingMsg);
    })

    // when we capture a chat message event we’ll include it in the page
    socket.on('chat message', function(msg){
        // messages 
        $('#messages').append($('<li>').html(`${msg.text} <span class="msg-time">${msg.time}</span>`));
        // scroll to the bottom of page
        const height = $('#messages').prop('scrollHeight');
        $('#messages').scrollTop(height);
    });

    // Show message when a new user left
    socket.on('userLeft', function(msg){
        // messages 
        $('#messages').append($('<li>').addClass('join-left-message').html(`${msg.text} <span class="msg-time">${msg.time}</span>`));
        // scroll to the bottom of page
        const height = $('#messages').prop('scrollHeight');
        $('#messages').scrollTop(height);
    });

    // Show message when a new user joined to the user
    socket.on('joinRoomUser', function(msg){
        // messages 
        $('#messages').append($('<li>').addClass('join-left-message').html(`${msg.text} <span class="msg-time">${msg.time}</span>`));
        // scroll to the bottom of page
        const height = $('#messages').prop('scrollHeight');
        $('#messages').scrollTop(height);
    });

    return (
        <Box m={2} className={classes.root}>
            <ul id="messages" className={classes.messages}></ul>
            <div className={classes.typing} id="user-is-typing-message"></div>
        </Box>
    );
}