import React, { Component } from 'react'
import { BrowserRouter as Router }from 'react-router-dom'
import { Link } from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'

export default class RegistrationForm extends Component {

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { full_name, user_name, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      full_name: full_name.value,
      user_name: user_name.value,
      password: password.value,
    })
    .then(user => {
      full_name.value = ''
      user_name.value = ''
      password.value = ''
      //this.props.onRegistrationSuccess() 
    })
    .catch(res => {
      this.setState({ error: res.error })
    })

    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
        type='password'
        required
        id='RegistrationForm__confirm-password'>
      </input>
    </div>
    <button type='submit'>
      Register
    </button>
    <Router>
      <Link to={'/'}>
        <button>
          Cancel
        </button>
      </Link>
    </Router>   
  </form>
    )
  }
}