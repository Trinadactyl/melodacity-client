import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Jam extends Component {
  render(){
    return (
      <div className='jam-page'>
        <h1>Let's Jam!</h1>
        <h2>Progression: [Selected progression]</h2>
        <h2>In the key of: [Selected key]</h2>

        <div className='chords'>
          {'chords of selected key go here'}
        </div>
        <div className='notes'>
          {'corresponding notes alligned with chords'}
        </div>

        <div className='controls'>
          <button>Record</button>
          <button>Stop</button>
          <button>Play</button>
        </div>
        <div>
          <button>Save</button>
          <Link to='/progression'>
            <button>Back</button>
          </Link>
        </div>
      </div>
    )
  }
}