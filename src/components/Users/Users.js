import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Users.css'

export default class Users extends Component {
  render() {
    return (
      <div className='user-links'>
        <Link to='/login'>Login</Link>
        |
        <Link to='/register'>Register</Link>
      </div>
    )
  }
}