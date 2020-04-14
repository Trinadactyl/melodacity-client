import React from 'react';
import { link } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Jambtn from './components/Jambtn/Jambtn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Jambtn />
    Login | Register
    </div>
  );
}

export default App;
