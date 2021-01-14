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
        {/* <Router> */}
          <Link to='/' className="user-link" onClick={this.handleLogoutClick} >
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
            <Link to='/login' className="user-link">Login/Register </Link>
          {/* </Router> */}
          {/* <span> Register (Coming soon!)</span> */}
          {/* <Link to='/register'> Register</Link> */}
        </div>
      )
  }

  render() {
    return (
      <div className='user-link'>
        {this.context.isLoggedIn
        ? this.renderLogoutLink()
        : this.renderLoginLink() }
      </div>
    )
  }
}