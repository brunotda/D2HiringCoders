import React from 'react';
import Routes from './routes'
import GlobalStyle from './globalStyles'

const APP: React.FC = () =>{
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default APP;