import React, { Component } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import './LoginPage.css'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.prop 
    const destination = (location.state || {}).from || '/'
    history.push(destination)
   }

   render() {
     return (
      <div className='login-page'>
        <h2>Login</h2>

        <div className='demo-user'>
          <h4>Login with following credentials to try all the features!</h4>
          <p>Username: test</p>
          <p>Password: password</p>
        </div>

        <LoginForm 
        onLoginSuccess={this.handleLoginSuccess}
        /> 
      </div>
     ) 
   }
  }
