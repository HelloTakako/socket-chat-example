import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

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
    marginTop: "10px"
  }
});

function NicknameForm () {
  const classes = useStyles();

  const [nickname, setNickname] = useState('Anonymous');
  
  const createRoom = () => {
      // set user's nickname from user input
      const userTypedNickname = document.querySelector('input').value;
      setNickname(userTypedNickname);

      //set cookie
      document.cookie = `username=${nickname};`;

      // jump to /room
      window.location.href = '/room';
  }

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <FormControl noValidate autoComplete="off" action="" id="nickname" >
            <TextField id="nickname-value filled-basic" label="Your Nickname..." variant="filled" required style={{ margin: 8 }}/>
            <CardActions>
              <Button variant="outlined" color="primary" onClick={createRoom} className={classes.button}>Create Your Room</Button>
            </CardActions>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
}

export default NicknameForm;