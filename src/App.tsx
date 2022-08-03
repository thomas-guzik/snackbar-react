import React from 'react';
import {Hello} from './components/Hello';

import logo from './logo.svg';
import './App.css';
import { SnackbarContextProvider } from './components/Snackbar';

function App() {
  return (
    <SnackbarContextProvider>
      <Hello />
    </SnackbarContextProvider>
  );
}

export default App;
