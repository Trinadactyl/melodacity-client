import React from 'react';
//import { link, Route } from 'react-router-dom'
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Jambtn from './components/Jambtn/Jambtn';
import Users from './components/Users/Users';
import KeySelect from './components/KeySelect/KeySelect';
import ProgSelect from './components/ProgSelect/ProgSelect';

function App() {

  return (

    <div className="App">
      <header className="App-header">
        <Header />
      </header>

        <Route exact path={'/'} component={Jambtn} />
        <Route path={'/key'} component={KeySelect} />
        <Route path={'/progression'} component={ProgSelect} />

      <Users />
    </div>
  );
}

export default App;
