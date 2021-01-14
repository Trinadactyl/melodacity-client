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

  toggleSelection = (value) => {
    //set context to button's value
    //dd class to selection so that it changes color when clicked
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
          <button className='key-btns' onClick={()=> this.context.setKey('A')}>A</button>
          <button className='key-btns' onClick={()=> this.context.setKey('Bb')}>A#</button>
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
          {/* </Router>         */}
        </nav>
  
      </>
    )
  }
}