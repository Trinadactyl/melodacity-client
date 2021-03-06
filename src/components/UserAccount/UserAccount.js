import React, { Component } from 'react';
import { AppContext } from '../../AppContext'
import MelodyService from '../../services/melody-service';
import './UserAccount.css'

export default class UserAccount extends Component {
  static contextType = AppContext

  constructor(props) {
    super(props);
    this.state = {
      melodies: [],
      currentUser: localStorage.getItem('userName'),
      currentUserId: localStorage.getItem('userId')
    };
  }

  //make request for specific user's melodies
  componentDidMount() {
    MelodyService
      .getUserSpecificMelodies(this.state.currentUserId)
      .then(melodies => {
        this.setState({ melodies: melodies })
      })
  }

  //update the state to reflect deleted melody
  handleDeleteMelody = id => {
    this.setState({
      melodies: this.state.melodies.filter(melody => melody.id !== id)
    })
  }

  handleDeleteClick = (id) => {
    MelodyService.deleteMelody(id)
    this.handleDeleteMelody(id)
  }

  //display the details of each melody within an element
  renderUserMelodies() {
    const melodies = this.state.melodies;

    const melodiesList = melodies.map((melody, i) =>
      <li key={i}>
        <div className='melody-list-item'>
          {i+1}.<button className='delete-btn' onClick={() => this.handleDeleteClick(melody.id)}>Delete</button>
          <p>{melody.title}</p>
          <p>key: {melody.music_key}</p>
          <p>progression: {melody.progression}</p> 
        </div>
      </li>)

    return (
      <ol className='melody-list'>
        {melodiesList}
      </ol>
    );
  }

  render() {
    return (
      <>
        <h1>Hello {this.state.currentUser}</h1>
        <h2>My Melodies</h2>
        {this.state.melodies.length === 0
          ? <span className='message'>You don't have any melodies saved!</span>
          : this.renderUserMelodies()}
      </>
    )
  }
}