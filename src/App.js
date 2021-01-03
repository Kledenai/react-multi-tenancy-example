import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Routes from './routes';

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  h1, p {
    margin: 0;
    padding: 0;
  }

  a:hover {
    text-decoration: none;
  }

  button {
    outline: none;
  }

  button:focus {
    outline: none;
  }

  button:active {
    outline: none;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
};

export default App;
