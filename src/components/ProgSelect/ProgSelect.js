import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProgSelect extends Component {
  constructor(props) {
    super(props)  
    this.state = {
    key: '',
    tonic:'',
    prog: ''
    }
  }

  handleProgSelect(prog) {
    this.setState(state => ({
      prog:prog
    }))
  }

  render(){
    return (
      <div className='progressions'>
        <h1>Choose a progression</h1>
        <button onClick={() => this.handleProgSelect('1, 4, 5')}>I IV V</button>
        <button onClick={() => this.handleProgSelect('1, 4, 7')}>I IV VII</button>
        <button onClick={() => this.handleProgSelect('1, 6, 7')}>I VI VII</button>
        <button onClick={() => this.handleProgSelect('2, 5, 1')}>II V I</button>
        <button onClick={() => this.handleProgSelect('1, 4, 2, 5')}>I IV II V</button>
        <button onClick={() => this.handleProgSelect('1, 4, 5, 1')}>I IV V I</button>
        <button onClick={() => this.handleProgSelect('1, 4, 5, 3, 7')}>I IV V III VII</button>
        <button onClick={() => this.handleProgSelect('1, 4, 6, 4')}>I V VI IV</button>
        <button onClick={() => this.handleProgSelect('3, 6, 2, 5')}>III VI II V</button>
        <button onClick={() => this.handleProgSelect('1, 4, 1, 5, 1')}>I IV I V I</button>

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
