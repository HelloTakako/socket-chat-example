import React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import io from 'socket.io-client';

function Header () {

  const socket = io();

  const value = 0;

  function clearCookie(){
    socket.emit('userLeft', document.cookie.slice(9, document.cookie.length));
    document.cookie = "username= ; expires = Thu, 01 Jan 1970 00:00:00 GMT" ;
  }
  
  return (
    <Paper className="header" square>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={value}
      >
        <Tab component={Link} to="/" onClick={clearCookie} label="Logout" />
      </Tabs>
    </Paper>
  );
}

export default Header;