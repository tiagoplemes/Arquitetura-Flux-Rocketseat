//Teste de modificação Guanabara
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Rota from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>    
      <BrowserRouter>        
        <Header />
        <Rota />     
        <GlobalStyle />   
      </BrowserRouter>
    </Provider>
  );
}

export default App;