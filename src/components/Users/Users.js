import React, { Component } from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './Users.css'
import TokenService from '../../services/token-service';
import { AppContext } from '../../AppContext'


export default class Users extends Component {

  static contextType = AppContext
  
    handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.updateIsLoggedIn()
    this.context.updateUserName()
    }

  renderLogoutLink() {
    return (
      <div className='user-logged-in'>
        <span className='greeting'>Hello {localStorage.userName}</span>
        {/* <Router> */}
          <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
          </Link>
        {/* </Router> */}
      </div>
    )
  }

  renderLoginLink() {
      return (
        <div className='user-not-logged-in'>
          {/* <Router> */}
            <Link to='/login'>Login </Link>
          {/* </Router> */}
          |
          <span> Register (Coming soon!)</span>
          {/* <Link to='/register'> Register</Link> */}
        </div>
      )
  }

  render() {
    return (
      <div className='user-links'>
        {this.context.isLoggedIn
        ? this.renderLogoutLink()
        : this.renderLoginLink() }
      </div>
    )
  }
}