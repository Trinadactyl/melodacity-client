import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MusiProvider from '../../MusicContext'
import './ProgSelect.css'

export default class ProgSelect extends Component {

  static contextType = MusiProvider

  // constructor(props) {
  //   super(props)  
  //   this.state = {
  //   key: '',
  //   tonic:'',
  //   prog: ''
  //   }
  // }

  // handleProgSelect(prog) {
  //   this.setState(state => ({
  //     prog:prog
  //   }))
  // }

  displaySelections = () => {
    return (
      <>
        <h2>Selected Key: {this.context.key}</h2>
        <h2>Selected Tonic: {this.context.tonic}</h2>
        <h2>Selected Progression: {this.context.prog}</h2>       
      </>
    )
  }


  render(){
    return (
      <div className='progressions'>
        <h1>Choose a progression</h1>
        {this.displaySelections()}
        <button className='prog' onClick={() => this.context.setProg([1, 4, 5])}>I-IV-V</button>
        <button className='prog' onClick={() => this.context.setProg([1, 4, 7])}>I-IV-VII</button>
        <button className='prog' onClick={() => this.context.setProg([1, 6, 7])}>I-VI-VII</button>
        <button className='prog' onClick={() => this.context.setProg([2, 5, 1])}>II-V-I</button>
        <button className='prog' onClick={() => this.context.setProg([1, 4, 2, 5])}>I-IV-II-V</button>
        <button className='prog' onClick={() => this.context.setProg([1, 4, 5, 1])}>I-IV-V-I</button>
        <button className='prog' onClick={() => this.context.setProg([1, 4, 5, 3, 7])}>I-IV-V-III-VII</button>
        <button className='prog' onClick={() => this.context.setProg([1, 4, 6, 4])}>I-V-VI-IV</button>
        <button className='prog' onClick={() => this.context.setProg([3, 6, 2, 5])}>III-VI-II-V</button>
        <button className='prog' onClick={() => this.context.setProg([1, 4, 1, 5, 1])}>I-IV-I-V-I</button>

        <nav>
          <Link to={'/select-key'}>
            <button className='nav'>Back</button>
          </Link>
          
          <Link to={'/jammin'}>
            <button className='nav'>Next</button>
          </Link> 
        </nav>
        
      </div>
    )
  }
}
