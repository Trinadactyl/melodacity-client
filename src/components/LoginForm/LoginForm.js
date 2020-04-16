import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LoginForm extends Component {
  render() {
    return (
      <form className='login-form'>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <input
            required
            name='user_name'
            id='LoginForm__user_name'>
          </input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <input
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </input>
        </div>
        <button type='submit'>
          Login
        </button>
        <Link to={'/'}>
          <button>
            Cancel
          </button>
        </Link>
      </form>
    )
  }
}