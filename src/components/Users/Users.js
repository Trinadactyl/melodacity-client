import React, { Component } from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
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
          <Link to='/' className="nav-link" onClick={this.handleLogoutClick}>
          Logout
          </Link >
        {/* </Router> */}
      </div>
    )
  }

  //do something like this to toggle classnames:
  //do I need to define actie somewhere?
  //className={isActive ? null : "user-link"}
  renderLoginLink() {
      return (
        <div className='user-not-logged-in'>
          {/* <Router> */}
            <NavLink to='/login' className="nav-link" activeClassName="active">Login/Register</NavLink>
          {/* </Router> */}
          {/* <span> Register (Coming soon!)</span> */}
          {/* <Link to='/register'> Register</Link> */}
        </div>
      )
  }

  render() {
    return (
      <div>
        {this.context.isLoggedIn
        ? this.renderLogoutLink()
        : this.renderLoginLink() }
      </div>
    )
  }
}