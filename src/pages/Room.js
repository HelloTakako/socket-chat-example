import React, { useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import $ from "jquery";

import Header from '../components/Header';
import MainContents from '../components/MainContents';
import SubContents from '../components/SubContents';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#ddd",
    },
}));

export default function Room(props) {
    const classes = useStyles();

    useEffect(()=>{

        // show "User is typing" message        
        // on smartphone, show the message when the user focused on the message box
        function typingMsg(msg){
            props.socket.emit('user typing', msg);
        }
    
        if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i) )
        {
            $("#m").on('focus', function(e){
            typingMsg('User is typing...');
            })
        } 
        else // on pc 
        {
            $('#m').keypress(function(e) {
            if(e.which === 13){
                return;
            }
            typingMsg('User is typing...');
            });
        }
    
        props.socket.on('user typing', function(typingMsg){
            $('#user-is-typing-message').text(typingMsg);
        })
    
        //when the user types in a message, the server gets it as a chat message event.
        let userNickname = document.cookie.slice(9, document.cookie.length);
        $('form').submit(function(e){
            e.preventDefault(); // prevents page reloading
            props.socket.emit('chat message', userNickname + ": " + $('#m').val());
            $('#m').val('');
            typingMsg('');
            return false;
        });
        
        //when we capture a chat message event we’ll include it in the page
        props.socket.on('chat message', function(msg){
            // message 
            $('#messages').append($('<li>').text(msg));
        });

    }, []);
    

    return (
        <div className={classes.root}>
            <Header />
            <Grid container spacing={3}>
                <Grid item xs={9}>
                    <MainContents socket={props.socket} />
                </Grid>
                <Grid item xs={3}>
                    <SubContents socket={props.socket} />
                </Grid>
            </Grid>
        </div>
    );
}