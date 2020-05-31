import React from 'react';
import {Link} from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function Header (props) {
  const [value, setValue] = React.useState(4);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        centered
      >
        <Tab component={Link} to="/room" label="Room" />
        <Tab component={Link} to="/settings" label="Settings" />
        <Tab component={Link} to="/about" label="About" />
        <Tab component={Link} to="/signin" label="SignIn" />
      </Tabs>
    </Paper>
  );
}

export {Header};