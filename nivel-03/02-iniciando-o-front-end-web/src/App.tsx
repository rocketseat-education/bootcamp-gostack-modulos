import React from 'react';

import SignIn from './pages/SignIn';
import GlobalStyle from './styles/globals';

const App: React.FC = () => {
  return (
    <>
      <SignIn />
      <GlobalStyle />
    </>
  );
};

export default App;
