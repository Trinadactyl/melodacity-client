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
        <p> Melodacity applies music theory principles to generate a simple note progression based on the scale you choose. 
          Click the strt button to make some sounds!
        </p>
      </div>
      
      </>
    )
  }
}