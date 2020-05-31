import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
        width: '80vw',
    },
    submitButton: {
        width: '10vw',
        border: 'none'
    }
  }));
  
function TextInput () {

    const classes = useStyles();

  return (
    <form className={classes.root} action="" id="text-input">     
        <input type="text" id="m" aria-describedby="my-helper-text" className={classes.textInput} />
        <button><i className="material-icons">send</i></button>
    </form>
  );
}

export default TextInput;