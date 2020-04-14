import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProgSelect extends Component {

  render(){
    return (
      <div className='progressions'>
        <h1>Choose a progression</h1>
        <button>I IV V</button>
        <button>I IV VII</button>
        <button>I VI VII</button>
        <button>II V I</button>
        <button>I IV II V</button>
        <button>I IV V I</button>
        <button>I IV V III VII</button>
        <button>I V VI IV</button>
        <button>III VI II V</button>
        <button>I IV I V I</button>

        <nav>
          <Link to={'/jammin'}>
            <button>Next</button>
          </Link>
          
          <Link to={'/key'}>
            <button>Back</button>
          </Link> 
        </nav>
        
      </div>
    )
  }
}
