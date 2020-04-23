import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import { AppContext } from '../../AppContext'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  static contextType = AppContext

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
    .then(res => {
      localStorage.setItem('userName', user_name.value);
      localStorage.setItem('userId', res.userId )
      //this.context.updateUserName(user_name.value)
      //also want to store name of current user to display on login
      //localStorage.setItem('name', name.value)
      user_name.value = ''
      password.value = ''
      TokenService.saveAuthToken(res.authToken)
      this.context.updateIsLoggedIn()
      this.props.onLoginSuccess()
      //window.location.reload(false)
    })    
    .catch(res => {
      this.setState({ error: res.error})
    }) 
  }


  render() {
    const { error } = this.state
    return (
      <form className='login-form' onSubmit={this.handleSubmitJwtAuth}>
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
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