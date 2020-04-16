import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class RegistrationForm extends Component {

  render() {
    return (
      <form>
        <div className='full_name'>
        <label htmlFor='RegistrationForm__full_name'>
          Full name 
        </label>
        <input
          name='full_name'
          type='text'
          required
          id='RegistrationForm__full_name'>
        </input>
      </div>
    <div className='user_name'>
      <label htmlFor='RegistrationForm__user_name'>
        User name 
      </label>
      <input
        name='user_name'
        type='text'
        required
        id='RegistrationForm__user_name'>
      </input>
    </div>
    <div className='password'>
      <label htmlFor='RegistrationForm__password'>
        Password 
      </label>
      <input
        name='password'
        type='password'
        required
        id='RegistrationForm__password'>
      </input>
    </div>
    <div className='confirm-password'>
      <label htmlFor='RegistrationForm__confirm-password'>
        Confirm Password 
      </label>
      <input
        name='confirm-password'
        type='confirm-password'
        required
        id='RegistrationForm__confirm-password'>
      </input>
    </div>
    <button type='submit'>
      Register
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