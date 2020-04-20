import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Users.css'
//import userApiService from '../../services/user-api-service'
import TokenService from '../../services/token-service';
//import config from '../../config'
import { AppContext } from '../../Context'


export default class Users extends Component {

  static contextType = AppContext
  
  // constructor(props) {
  //   super(props)
  //     this.state = {
  //     userName: localStorage.userName,
  //   }
  // }

  // getUserName = () => {
  //   const userName = localStorage.getItem('userName');
  //   this.setState({userName: userName})
  //   }  

    handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.updateIsLoggedIn()
    this.context.updateUserName()
    //refreshing the page
    //window.location.reload(false)
    }

  renderLogoutLink() {
    return (
      <div className='user-logged-in'>
        <span className='greeting'>Hello {localStorage.userName}</span>
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
        {this.context.isLoggedIn
        ? this.renderLogoutLink()
        : this.renderLoginLink() }
      </div>
    )
  }
}