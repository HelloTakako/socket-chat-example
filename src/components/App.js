import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';

import Home from '../pages/Home';
import Room from '../pages/Room';

function App() {
  return (
    <Router>
      <Box
      width={1}
      height="100%">      
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