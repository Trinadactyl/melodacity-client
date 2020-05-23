import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { AppContext } from './AppContext';
import { MusicProvider } from './MusicContext';
import './App.css';
import Header from './components/Header/Header';
import PrivateRoute from './components/Utils/PrivateRoute';
import PublicRoute from './components/Utils/PublicRoute';
import Jambtn from './components/Jambtn/Jambtn';
import Users from './components/Users/Users';
import KeySelect from './components/KeySelect/KeySelect';
import ProgSelect from './components/ProgSelect/ProgSelect';
import Jam from './components/Jam/Jam';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import UsersApiService from './services/user-api-service'
import LoginPage from './components/LoginPage/LoginPage';
import TokenService from './services/token-service';

import SaveMelody from './SaveMelody/SaveMelody';
import UserAccount from './components/UserAccount/UserAccount';

class App extends Component {
  state = { 
    isLoggedIn: TokenService.hasAuthToken(), 
    userName: localStorage.userName,
  }

updateIsLoggedIn = () => {
  this.setState({isLoggedIn: 
    TokenService.hasAuthToken()})
    console.log('isLoggedIn:', TokenService.hasAuthToken())
}

updateUserName = (userName) => {
  this.setState({
    userName: userName
  })
}

componentDidMount() {
  UsersApiService
    .getUsers()
    .then(users => {
     console.log('users:', users)
    })
}

render() {
  const value = {
    isLoggedIn: this.state.isLoggedIn,
    updateIsLoggedIn: this.updateIsLoggedIn,
    updateUserName: this.updateUserName
  }

  return (
    <AppContext.Provider value={value}>
    <MusicProvider>  
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

          <Route exact path={'/'} component={Jambtn} />

          <PublicRoute path={'/login'} component={LoginPage} />
          <PublicRoute path={'/register'} component={RegistrationForm} />
                  
          <Route path={'/select-key'} component={KeySelect} />
          <Route path={'/select-progression'} component={ProgSelect} />
          <Route path={'/jammin'} component={Jam} />

          <PrivateRoute path={'/save'} component={SaveMelody} />
          <PrivateRoute path={'/user'} component={UserAccount} />
          
        <Users />
      </div>
    </MusicProvider>
    </AppContext.Provider>
  );
  }
}

export default App;
