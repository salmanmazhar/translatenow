import React from 'react';
import logo from './logo.svg';
import './App.css';
import  { Header, Content } from './components'
import { tsPropertySignature } from '@babel/types';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <Content></Content>
    </div>
  );
}

export default App;
