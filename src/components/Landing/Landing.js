import React, { Component } from 'react';
import './Landing.css'

export default class Landing extends Component {
  render() {
    return (
      <>
      <header className='landing-header'>
        <h2>Welcome, melodist!</h2>
      </header>
      <div className='intro'>
        <p> Using basic music theory, melodacity provides a fun and simple interface to help creatives with song composition and exploring 
          how different note combonations sound together! Choose a key, tonic, and chord progression, and begin making sounds!
        </p>
      </div>
      
      </>
    )
  }
}