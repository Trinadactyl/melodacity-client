import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Jambtn from './components/Jambtn/Jambtn';
import Users from './components/Users/Users';
import KeySelect from './components/KeySelect/KeySelect';
import ProgSelect from './components/ProgSelect/ProgSelect';
import Jam from './components/Jam/Jam';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import UsersApiService from './services/user-api-service'

class App extends Component {

componentDidMount() {
  UsersApiService
    .getUsers()
    .then(users => {
      console.log(users)
    })
}

render() {
  return (

    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      
        <Route exact path={'/'} component={Jambtn} />
        <Route path={'/key'} component={KeySelect} />
        <Route path={'/progression'} component={ProgSelect} />
        <Route path={'/jammin'} component={Jam} />
        <Route path={'/login'} component={LoginForm} />
        <Route path={'/register'} component={RegistrationForm} />

      <Users />
    </div>
  );
  }
}

export default App;
