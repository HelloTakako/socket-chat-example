import React from 'react';

import { Link } from "react-router-dom";

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  }
});

function NicknameForm () {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <FormControl noValidate autoComplete="off" action="" id="nickname">
          <label>Your Nickname: </label>
          <Input type="text"/>
          <CardActions>
            <Button variant="outlined" color="primary" component={Link} to="/room">Create Your Room</Button>
          </CardActions>
        </FormControl>
      </CardContent>
    </Card>
  );
}

export default NicknameForm;