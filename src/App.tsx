import React from 'react';
import logo from './logo.svg';
import Button from '@mui/material/Button';
import { defineMessages, useIntl } from 'react-intl';
import './App.scss';

export const messages = defineMessages({
  buttonTitle: {
    id: 'app.button',
    defaultMessage: 'Download',
    description: 'Modal dialog title for revoking a token for a user.',
  },
});

function App() {
  const intl = useIntl();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload 2.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained">{intl.formatMessage(messages.buttonTitle)}</Button>
      </header>
    </div>
  );
}

export default App;
