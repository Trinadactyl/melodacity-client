import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Users.css'
//import userApiService from '../../services/user-api-service'
import TokenService from '../../services/token-service';
//import config from '../../config'


export default class Users extends Component {
  constructor(props) {
    super(props)
      this.state = {
      userName: localStorage.userName,
    }
  }

  // getUserName = () => {
  //   const userName = localStorage.getItem('userName');
  //   this.setState({userName: userName})
  //   }  

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    //refreshing the page
    window.location.reload(false)
  }

  renderLogoutLink() {
    return (
      <div className='user-logged-in'>
        <span className='greeting'>Hello {this.state.userName}</span>
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