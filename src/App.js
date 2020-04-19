import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { AppContext } from './Context'
import './App.css';
import Header from './components/Header/Header';
//import PrivateRoute from './components/Utils/PrivateRoute';
import PublicRoute from './components/Utils/PublicRoute';
import Jambtn from './components/Jambtn/Jambtn';
import Users from './components/Users/Users';
import KeySelect from './components/KeySelect/KeySelect';
import ProgSelect from './components/ProgSelect/ProgSelect';
import Jam from './components/Jam/Jam';
//import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import UsersApiService from './services/user-api-service'
import LoginPage from './components/LoginPage/LoginPage';
import TokenService from './services/token-service';

class App extends Component {
  state = { isLoggedIn: false }

updateIsLoggedIn = () => {
  this.setState({isLoggedIn: 
    TokenService.hasAuthToken()})
}

componentDidMount() {
  UsersApiService
    .getUsers()
    .then(users => {
      console.log(users)
    })
}
render() {
  const value = {
    isLoggedIn: this.state.isLoggedIn,
    updateIsLoggedIn: this.updateIsLoggedIn()
  }

  return (
    <AppContext.Provider value={value}>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

          <Route exact path={'/'} component={Jambtn} />

          <PublicRoute path={'/login'} component={LoginPage} />
          <PublicRoute path={'/register'} component={RegistrationForm} />
          

          <Route path={'/key'} component={KeySelect} />
          <Route path={'/progression'} component={ProgSelect} />
          <Route path={'/jammin'} component={Jam} />
          
        <Users />
      </div>
    </AppContext.Provider>
  );
  }
}

export default App;
