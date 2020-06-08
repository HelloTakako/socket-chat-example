import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: "85vh",
    textAlign: "center",
    paddingTop: "15vh",
  },
  buttonPublicRoom: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginTop: "10px",
    padding: "5px 10px",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
  buttonPrivateRoom: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginTop: "10px",
    padding: "5px 10px",
    background: 'linear-gradient(45deg, #6B72FE 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  }
});

function NicknameForm (props) {
  const classes = useStyles();
  
  const joinPublicRoom = (e) => {
      // set username from user input
      const userTypedNickname = document.querySelector('input').value;
      const roomType = "public";

      if(userTypedNickname !== ""){
      props.socket.emit('go-to-room', [userTypedNickname, roomType]);
      // jump to the room
      props.socket.on('jump-to-room', function([roomId, userId]){
        document.cookie = `userId=${userId};`;
        window.location.href = `/room?id=${roomId}`;
      })
    } else {
      alert("You forgot to enter you nickname!")
    }
  }

  const createRoom = (e) => {
    const userTypedNickname = document.querySelector('input').value;
    if(userTypedNickname !== ""){

      props.socket.emit('go-to-room', [userTypedNickname, "private"]);

      // jump to /room
      props.socket.on('jump-to-room', function(roomId){
      window.location.href = `/room?id=${roomId}`;
      });
    } else {
      alert("You forgot to enter you nickname!");
    }
}

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <FormControl component="form" noValidate autoComplete="off" id="nickname" >
          <TextField id="nickname-value filled-basic" label="Your Nickname..." variant="filled" required style={{ margin: 8 }}/>
            <CardActions>
              <Input onClick={joinPublicRoom} inputProps={{"type" : "submit"}} className={classes.buttonPublicRoom} value="Join the Public Room" />
              {/* <Input variant="outlined" color="primary" onClick={createRoom} className={classes.buttonPrivateRoom} value="Create a Room" /> */}
            </CardActions>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
}

export default NicknameForm;