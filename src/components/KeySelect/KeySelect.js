import React, { Component } from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MusicProvider from '../../MusicContext';
import './KeySelect.css'

export default class KeySelect extends Component {

  static contextType = MusicProvider

  constructor(props) {
    super(props);
    this.state = {selected: true}
  }


  //SOS! I need to togggle the color of selected key button
  //only one is colored at a time 
  //use context value or buttin value??

// 1. upon clicking a button, match the button's value to current state value 
//  if they match, set selected value to True
  

// 2. If a button is selected, then give it a class that changes its color

  changeSelectedKeyColor = (e) => {
    if (this.context.key === e.target.value) {

    }
  }

  toggleSelected = () => {
    this.setState({selected: !this.state.selected})
  }



  displaySelections = () => {
    if (this.context.key === '' || this.context.tonic === '') {
      return (
        <>
          <h1> Choose your key and tonic!</h1>
        </>
      )
    }
    return (
      <>
        <h2> Key: {this.context.key} {this.context.tonic}</h2>      
      </>
    )
  }

  clearSelections = () => {
    this.context.setKey('');
    this.context.setTonic('');
  }


  render () {
    return (
      <>
        {this.displaySelections()}

        <div className='tonic-select'>
          <button className='tonic' onClick={()=> this.context.setTonic('Major')}>Major</button>
          <button className='tonic' onClick={()=> this.context.setTonic('Minor')}>Minor</button>
        </div>

        <div className='key-select'>  
          <button className='key-btns' value='A' selected={this.state.selected} onClick={(e)=> {
            this.context.setKey('A'); 
            this.toggleSelected();
            console.log(this.state.selected)}}>A
          </button>


          <button className='key-btns' onClick={()=> {this.context.setKey('Bb')}}>A#</button>
          <button className='key-btns' onClick={()=> this.context.setKey('B')}>B</button>
          <button className='key-btns' onClick={()=> this.context.setKey('C')}>C</button>
          <button className='key-btns' onClick={()=> this.context.setKey('Db')}>C#</button>
          <button className='key-btns' onClick={()=> this.context.setKey('D')}>D</button>
          <button className='key-btns' onClick={()=> this.context.setKey('Eb')}>D#</button>
          <button className='key-btns' onClick={()=> this.context.setKey('E')}>E</button>
          <button className='key-btns' onClick={()=> this.context.setKey('F')}>F</button>
          <button className='key-btns' onClick={()=> this.context.setKey('Gb')}>F#</button>
          <button className='key-btns' onClick={()=> this.context.setKey('G')}>G</button>
          <button className='key-btns' onClick={()=> this.context.setKey('Ab')}>G#</button>
        </div>
        
        <nav>
          {/* <Router> */}
            <Link to='/'>
              <button className='purple-btn'>Back</button>
            </Link>
            <button className='' onClick={this.clearSelections}>Clear</button>
            <Link to='/select-progression'>
              <button className='' onClick={this.verifySelections}>Next</button>
            </Link>
          {/* </Router> */}
        </nav>
  
      </>
    )
  }
}