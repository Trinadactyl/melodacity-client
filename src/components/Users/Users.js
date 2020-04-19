import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Users.css'
import TokenService from '../../services/token-service';

export default class Users extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    window.location.reload(false)
    console.log('token cleared -- refresh browser')
  }

  renderLogoutLink() {
    return (
      <div className='user-logged-in'>
        <span className='greeting'>Hello {'user_name'}</span>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='user-not-logged-in'>
        <Link to='/login'>Login</Link>
        |
        <Link to='/register'>Register</Link>
      </div>
    )
  }


  render() {
    return (
      <div className='user-links'>
        {TokenService.hasAuthToken()
        ? this.renderLogoutLink()
        : this.renderLoginLink()}
      </div>
    )
  }
}