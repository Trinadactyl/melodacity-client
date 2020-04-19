import React, { Component } from 'react'
import LoginForm from '../LoginForm/LoginForm'

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
        <LoginForm 
        onLoginSuccess={this.handleLoginSuccess}
        /> 
      </div>
     ) 
   }
  }
