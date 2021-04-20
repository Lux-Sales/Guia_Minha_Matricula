import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './globalStyles';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
