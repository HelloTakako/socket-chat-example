import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import $ from 'jquery';
import io from 'socket.io-client';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: '0',
        width: '80vw',
        display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    textInput: {
      width: '80%',
      padding: '10px'
    },
    submitButton: {
        width: '20%',
        border: 'none'
    }
  }));
  
function TextInput () {
    const classes = useStyles();
    const socket = io();

    useEffect(()=> {
      // show "User is typing" message        
      // on smartphone, show the message when the user focused on the message box

      if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i) )
      {
        $("#m").on('focus', function(e){
          socket.emit('user typing', 'User is typing...');
        })
      } 
      else // on pc 
      {
        $('#m').keypress(function(e) {
          if(e.which === 13){
            return;
          }
          socket.emit('user typing', 'User is typing...');
        });
      }

      //when the user types in a message, the server gets it as a chat message event.
      let userNickname = document.cookie.slice(9, document.cookie.length);

      $('form').submit(function(e){
        e.preventDefault(); // prevents page reloading
        socket.emit('chat message', userNickname + ": " + $('#m').val());
        $('#m').val('');
        socket.emit('user typing', '');
        return false;
      });  
    })
    

  return (
    <form className={classes.root} action="" id="text-input">     
        <input type="text" id="m" className={classes.textInput} />
        <button id="send-button"><i className="material-icons">send</i></button>
    </form>
  );
}

export default TextInput;