import React from 'react';

import Box from '@material-ui/core/Box';

import Timeline from './Timeline';
import NicknameForm from './NicknameForm';
import TextInput from './TextInput';

function App() {
  return (
    <Box m={2}>
      <NicknameForm />
      <Timeline />
      <TextInput />
    </Box>
  );
}

export default App;