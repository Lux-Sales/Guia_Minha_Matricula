import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './globalStyles';
import TokenProvider from './contexts/TokenContext';

const App: React.FC = () => (
  <TokenProvider>
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  </TokenProvider>
);

export default App;
