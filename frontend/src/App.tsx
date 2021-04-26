import React from 'react';
import Dashboard from './pages/Dashboard';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Dashboard />
    </>
  );
};

export default App;
