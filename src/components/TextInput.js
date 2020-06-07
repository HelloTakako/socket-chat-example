import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import $ from "jquery";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: '0',
        width: '100vw',
        display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    textInput: {
      width: '65vw',
    },
    submitButton: {
        width: '10vw',
        border: 'none'
    }
  }));
  
function TextInput (props) {

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

}, []);

  return (
    <form className={classes.root} action="" id="text-input">     
        <input type="text" id="m" className={classes.textInput} />
        <button><i className="material-icons">send</i></button>
    </form>
  );
}

export default TextInput;