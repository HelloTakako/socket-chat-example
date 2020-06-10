import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

  return (
    <form className={classes.root} action="" id="text-input">     
        <input type="text" id="m" className={classes.textInput} />
        <button id="send-button"><i className="material-icons">send</i></button>
    </form>
  );
}

export default TextInput;