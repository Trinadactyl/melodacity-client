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
        console.log('state', this.state)
      })
  }

  //update the state to reflect deleted melody
  handleDeleteMelody = id => {
    this.setState({
      melodies: this.melodies.filter(melody => melody.id !== id)
    })
  }

  handleDeleteClick = () => {
    //alert(`You can't delete this right now.`)
    console.log(this.state.melodies.id)
    MelodyService.deleteMelody(this.state.currentUserId)
    //this.handleDeleteMelody(/*melodyId*/)
    console.log('deleted')
  }

  //display the details of each melody within an element
  renderUserMelodies() {
    const melodies = this.state.melodies;

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

  render() {

    return (
      <>
        <h1>Hello {this.state.currentUser}</h1>
        <h2>My Melodies</h2>
        {this.state.melodies.length === 0
          ? <span>You don't have any melodies saved!</span>
          : this.renderUserMelodies()}
      </>
    )
  }
}