import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MusicProvider from '../../MusicContext';
import { Link } from 'react-router-dom';
import MelodyService from '../../services/melody-service';
import './SaveMelody.css'

export default class SaveMelody extends Component {
  static contextType = MusicProvider

  state = { 
    error: null,
    submitted: false
  }

  handleSubmitMelodyForm = ev => {
    ev.preventDefault()
    const { title } = ev.target
    const userId = localStorage.getItem('userId')
    MelodyService.postMelody({
      title: title.value,
      music_key: this.context.key,
      tonic: this.context.tonic,
      progression: this.context.prog.join(','),
      melody: this.context.melody.join(','),
      user_id: userId
    })
      //what is this doing?
      .then(res => {
        title.value = ''
      })
    this.setState({ submitted: true })
    this.props.history.push('/user')
  }

  renderSubmitStatus() {
    if(this.state.submitted){
      return (
       <p className="message">Melody Saved!</p> 
      )
    }
    return
  }


  render() {
    const prog = this.context.prog
    const key = this.context.key
    //const melody = this.context.melody

    return (
      <form className='submit-melody' onSubmit={this.handleSubmitMelodyForm}>
        <h1>Save your Melody</h1>
        <label htmlFor='title'>Title</label>
        <input
          required
          name='title'
          id='title'>
        </input>
        <div className='details'>
          <p>Key: {key}</p>
          <p>Progression: {prog}</p>
        </div>
        {this.renderSubmitStatus()}
        <Router>
          <Link to='/jammin'>
            <button className='purple-btn'>Cancel</button>
          </Link> 
        </Router>
        
        <button className='purple-btn' type='submit'>
          Submit
        </button>
      </form>
    )
  }
}