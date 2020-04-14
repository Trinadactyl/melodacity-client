import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProgSelect extends Component {

  render(){
    return (
      <div className='progressions'>
        <h1>Choose a progression</h1>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>

        <nav>
          <button>Next</button>
          <Link to={'/key'}>
            <button>Back</button>
          </Link> 
        </nav>
        
      </div>
    )
  }
}
