import React, { Component } from 'react';
import { AppContext } from '../../AppContext'
import MelodyService from '../../services/melody-service';
import './UserAccount.css'

export default class UserAccount extends Component {
  static contextType = AppContext 

  state = {
    melodies: []
  }

componentDidMount() {
  const userId = localStorage.getItem('userId')
  MelodyService
    .getMelodies(userId)
    .then(melodies => { 
      this.setState({
          melodies: melodies
        })
        //console.log('state',this.state)
    })
}

renderUserMelodies() {
  const melodies = this.state.melodies;
  console.log('melodies var:', melodies);
  for (let melody in melodies) {
    return (
    <div className='melody-div'>
      <p>{melodies.title}</p>
      <p>Key: {melodies.music_key}</p>
      <p>Tonic: {melodies.tonic}</p>
      <p>progression: {melodies.progression}</p>
      <button>Delete</button>
    </div> 
    )
  }   
}

  // handleDeleteMelody() {

  // }

  render(){

    const userName = localStorage.getItem('userName')


    return (
      <>
        <h1>Hello {userName}</h1>
        <h2>My Melodies</h2>
        {this.renderUserMelodies()}
      </>
    )
  }
}