import React, { Component } from 'react';
//import { BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-router-dom';
import MusiProvider from '../../MusicContext'
import './ProgSelect.css'

export default class ProgSelect extends Component {

  static contextType = MusiProvider

  
  displayKey = () => {
    if (this.context.key === '' || this.context.tonic === '') {
      return (
        <>
          <h2> Don't forget to select a key and tonic on the key tab!</h2>
        </>
      )
    }
    return (
      <>
        <h2> Key: {this.context.key} {this.context.tonic}</h2>     
      </>
    )
  }

  displayProg = () => {
    if (this.context.prog.length === 0) {
       console.log(this.context.prog)
      return (
        <>
          <h1>Now choose a progression!</h1>
        </>
      )
    } 
    return (
      <>
        <h1>{this.context.prog}</h1>     
      </>
    )
  }


  clearSelections = () => {
    this.context.setKey('');
    this.context.setTonic('');
    this.context.setProg([]);
  }


  render(){
    return (
      <>  
      {this.displayKey()}    
      {this.displayProg()}
      
      <div className='prog-select'>     
        <button className='prog-btns' onClick={() => this.context.setProg([1, 4, 5])}>1-4-5</button>
        <button className='prog-btns' onClick={() => this.context.setProg([1, 4, 7])}>1-4-7</button>
        <button className='prog-btns' onClick={() => this.context.setProg([1, 6, 7])}>1-6-7</button>
        <button className='prog-btns' onClick={() => this.context.setProg([2, 5, 1])}>2-5-1</button>
        <button className='prog-btns' onClick={() => this.context.setProg([1, 4, 2, 5])}>1-4-2-5</button>
        <button className='prog-btns' onClick={() => this.context.setProg([1, 5, 6, 4])}>1-5-6-4</button>
        <button className='prog-btns' onClick={() => this.context.setProg([1, 4, 5, 3, 7])}>1-4-5-3-7</button>
        <button className='prog-btns' onClick={() => this.context.setProg([1, 4, 6, 4])}>1-4-6-4</button>
        <button className='prog-btns' onClick={() => this.context.setProg([3, 6, 2, 5])}>3-6-2-5</button>
        <button className='prog-btns' onClick={() => this.context.setProg([1, 4, 1, 5, 1])}>1-4-1-5-1</button>
      </div>
        <nav>
          {/* <Router> */}
            <Link to={'/select-key'}>
              <button className='purple-btn'>Back</button>
            </Link>
            <button className='purple-btn' onClick={this.clearSelections}>Clear</button>
            <Link to={'/jammin'}>
              <button className='purple-btn'>Next</button>
            </Link>
          {/* </Router> */}
           
        </nav>  
      </>
    )
  }
}
