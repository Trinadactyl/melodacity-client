import React, { Component } from 'react';
import { AppContext } from '../../AppContext'
import MelodyService from '../../services/melody-service';
import './UserAccount.css'

export default class UserAccount extends Component {
  static contextType = AppContext

  constructor(props) {
    super(props);
    this.state = {
      melodies: []
    }
  }

  //make request for specific users's melodies
  componentDidMount() {
    const userId = localStorage.getItem('userId')
    MelodyService
      .getUserSpecificMelodies(userId)
      .then(melodies => {
        this.setState({ melodies: melodies })
        console.log('state', this.state)
      })
  }

  handleDeleteClick = () => {
    alert(`You can't delete this right now.`)

  }

  //display the details of each melody within an element
  renderUserMelodies() {
    const melodies = this.state.melodies;
    console.log('melodies:', melodies);

    const melodiesList = melodies.map((melody, i) =>
      <li key={i}>
        <div className='melody-list-item'>
          {i+1}.<button className='delete-btn' onClick={this.handleDeleteClick}>Delete</button>
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

  // {melodies.title}
  // Key: {melodies.music_key}
  // Tonic: {melodies.tonic}
  // progression: {melodies.progression}

  // handleDeleteMelody() {

  // }

  render() {

    const userName = localStorage.getItem('userName')

    return (
      <>
        <h1>Hello {userName}</h1>
        <h2>My Melodies</h2>
        {this.state.melodies.length === 0
          ? <span>You don't have any melodies saved!</span>
          : this.renderUserMelodies()}
      </>
    )
  }
}