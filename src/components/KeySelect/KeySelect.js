import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Route } from 'react-router-dom';
//import notes from '../notes'

export default class KeySelect extends Component {
  state = {
    notes: ['A', 'Ab', 'B', 'Bb', 'C', 'D', 'Db', 'E', 'Eb', 'F', 'G', 'Gb'],
    seletedkey: '',
    majormin:''
  }

  render () {

    
    return (
      <div className='key-select'>

      
        <h1>Choose a Key</h1>
        
        <button>A</button>
        <button>A#</button>
        <button>B</button>
        <button>C</button>
        <button>C#</button>
        <button>D</button>
        <button>D#</button>
        <button>E</button>
        <button>F</button>
        <button>F#</button>
        <button>G</button>
        <button>G#</button>

        <button>Major</button>
        <button>Minor</button>

        <nav>
          <Link to='/progression'>
            <button>Next</button>
          </Link>
         <Link to='/'>
           <button>Back</button>
         </Link>
        </nav>
  
      </div>
    )
  }
}