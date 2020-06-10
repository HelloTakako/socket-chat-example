import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: "85vh",
    textAlign: "center",
    paddingTop: "15vh"
  },
  button: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginTop: "10px",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  }
});

function NicknameForm () {
  const classes = useStyles();
  
  const joinPublicRoom = () => {
      // set user's nickname from user input
      const userTypedNickname = document.querySelector('input').value;

      if(userTypedNickname !== ""){
      //set cookie
      // expire time
      document.cookie = `username=${userTypedNickname};`;

      // jump to /room
      window.location.href = '/room';
    } else {
      alert("You forgot to enter you nickname!")
    }
  }

//   const createRoom = () => {
//     console.log("under construction");
// }

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <FormControl noValidate autoComplete="off" action="" id="nickname" >
            <TextField id="nickname-value filled-basic" label="Your Nickname..." variant="filled" required style={{ margin: 8 }}/>
            <CardActions>
              <Button variant="outlined" color="primary" onClick={joinPublicRoom} className={classes.button}>Join the Public Room</Button>
              {/* <Button disabled variant="outlined" color="primary" onClick={createRoom} className={classes.button}>Create a Room</Button> */}
            </CardActions>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
}

export default NicknameForm;