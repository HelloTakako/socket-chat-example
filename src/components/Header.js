import React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function Header () {

  const value = 0;

  function clearCookie(){
    document.cookie = "username= ; expires = Thu, 01 Jan 1970 00:00:00 GMT" 
  }
  
  return (
    <Paper square>
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