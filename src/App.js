//Teste de modificação Guanabara
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Rota from './routes';

function App() {
  return (
      <BrowserRouter>        
        <Header />
        <Rota />     
        <GlobalStyle />   
      </BrowserRouter>
  );
}

export default App;