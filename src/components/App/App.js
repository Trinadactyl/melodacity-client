import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import { MusicProvider } from '../../MusicContext';
import './App.css';
import Header from '../Header/Header';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicRoute from '../Utils/PublicRoute';
import Jambtn from '../Jambtn/Jambtn';
import Users from '../Users/Users';
import KeySelect from '../KeySelect/KeySelect';
import ProgSelect from '../ProgSelect/ProgSelect';
import JamPage from '../JamPage/JamPage';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginPage from '../LoginPage/LoginPage';
import TokenService from '../../services/token-service';
import SaveMelody from '../SaveMelody/SaveMelody';
import UserAccount from '../UserAccount/UserAccount';
import Landing from '../Landing/Landing';
//import UsersApiService from '../../services/user-api-service'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { 
    isLoggedIn: TokenService.hasAuthToken(), 
    userName: localStorage.userName,
    //also get name of logged in user!
    }
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

//To see the users in the database:
// componentDidMount() {
//   UsersApiService
//     .getUsers()
//     .then(users => {
//      console.log('users:', users)
//     })
// }

render() {
  const value = {
    isLoggedIn: this.state.isLoggedIn,
    userName: this.state.userName,
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
        
          <Route exact path={'/'} component={Landing} />
          <Route exact path={'/'} component={Jambtn} />
          

          <PublicRoute path={'/login'} component={LoginPage} />
          <PublicRoute path={'/register'} component={RegistrationForm} />
                  
          <Route path={'/select-key'} component={KeySelect} />
          <Route path={'/select-progression'} component={ProgSelect} />
          <Route path={'/jammin'} component={JamPage} />

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
