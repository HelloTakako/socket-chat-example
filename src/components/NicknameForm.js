import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

function NicknameForm () {
  
  return (
    <FormControl noValidate autoComplete="off" action="" id="nickname">
        <label>Your Nickname: </label>
        <Input type="text"/>
    </FormControl>
  );
}

export default NicknameForm;