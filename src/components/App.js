import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Home from '../pages/Home';
import Room from '../pages/Room';

// custom style
const useStyles = makeStyles({
  root: {
    height: "100vh",
  }
});

function App() {
  const classes = useStyles();

  return (
    <Router>
        <Box
        width={1}
        className={classes.root}>      
          <Switch>
            <Route path="/room">
              <Room />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Box>
    </Router>
  );
}

export default App;