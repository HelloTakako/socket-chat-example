import React, {useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import $ from "jquery";

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
        },   
        '& span' :{
            fontSize: "80%",
            color: "#999",
            marginLeft: "5px"
        } 
    }
  });

export default function Timeline(props) {
    const classes = useStyles();

    useEffect(() => {
        // Update the document title using the browser API
        //when we capture a chat message event we’ll include it in the page
        props.socket.on('message', function(msg){
            console.log(msg)
            // messages 
            $('#messages')
                .append($('<li>').html(`${msg.username} : ${msg.text} <span class="msg-time">${msg.time}</span>`));
            // scroll to the bottom of page
            const height = $('#messages').prop('scrollHeight');
            $('#messages').scrollTop(height);
        });
    }, [props.socket]);

    props.socket.on('userloggedout-admin', function(msg){
        // messages 
        $('#messages').append($('<li>').text(msg.text));
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