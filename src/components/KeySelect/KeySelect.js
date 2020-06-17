import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MusicProvider from '../../MusicContext'
//import { Route } from 'react-router-dom';
//import notes from '../notes';
import './KeySelect.css'

export default class KeySelect extends Component {

  static contextType = MusicProvider

  displaySelections = () => {
    return (
    <>
      <h2>Selected Key: {this.context.key}</h2>
      <h2>Selected Tonic: {this.context.tonic}</h2>
    </>
    )
  }

  // verifySelections = () => {
  //   if (this.context.key === '') {
  //     alert('Please select a key')
  //   } else if (this.context.tonic === '') {
  //     alert('Please select a tonic')
  //   }
  //   return;
  // }


  render () {
    return (
      <>
        <h1>Choose a Key</h1>
        {this.displaySelections()}

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

        <div className='tonic-select'>
          <button className='tonic' onClick={()=> this.context.setTonic('Major')}>Major</button>
          <button className='tonic' onClick={()=> this.context.setTonic('Minor')}>Minor</button>
        </div>
        
        <nav>
          <Link to='/'>
            <button className='purple-btn'>Back</button>
          </Link>
         <Link to='/select-progression'>
           <button className='purple-btn' onClick={this.verifySelections}>Next</button>
         </Link>
        </nav>
  
      </>
    )
  }
}