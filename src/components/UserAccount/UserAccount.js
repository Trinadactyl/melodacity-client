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
    MelodyService
      .getMelodies()
      .then(melodies => {
        console.log(melodies)  
        this.setState({
            melodies: melodies
          })
        melodies.forEach(melody => {
          console.log(melody.title)        
        });
      })
  }

  // handleDeleteMelody() {

  // }

  render(){

    const userName = localStorage.getItem('userName')
    const melody = this.state.melodies.map(melody => 
      <div className='melody-box'>
        <p>{melody.title}</p>
        <p>Key: {melody.music_key}</p>
        <p>Tonic: {melody.tonic}</p>
        <p>progression: {melody.progression}</p>
        <button>Delete</button>
      </div> )

    return (
      <>
        <h1>Hello {userName}</h1>
        <h2>My Melodies</h2>
        {melody}
      </>
    )
  }
}