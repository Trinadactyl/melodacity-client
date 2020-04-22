import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MusicContext from '../../MusicContext'
//import { Route } from 'react-router-dom';
//import notes from '../notes';
import './KeySelect.css'

export default class KeySelect extends Component {

  static contextType = MusicContext

  // constructor(props) {
  //   super(props)  
  //   this.state = {
  //   key: '',
  //   tonic:''
  //   }
  // }


  // context.setKey()(key) {
  //   this.context.setState(state => ({
  //     key: key 
  //   }))
  // }

  // handleTonicSelect(tonic) {
  //   this.setState(state => ({
  //     tonic: tonic
  //   }))
  // }
  

  render () {
    return (
      <>
        <h1>Choose a Key</h1>

        <div className='key-select'>     
          <button className='key' onClick={()=> this.context.setKey('A')}>A</button>
          <button className='key' onClick={()=> this.context.setKey('A#')}>A#</button>
          <button className='key' onClick={()=> this.context.setKey('B')}>B</button>
          <button className='key' onClick={()=> this.context.setKey('C')}>C</button>
          <button className='key' onClick={()=> this.context.setKey('C#')}>C#</button>
          <button className='key' onClick={()=> this.context.setKey('D')}>D</button>
          <button className='key' onClick={()=> this.context.setKey('D#')}>D#</button>
          <button className='key' onClick={()=> this.context.setKey('E')}>E</button>
          <button className='key' onClick={()=> this.context.setKey('F')}>F</button>
          <button className='key' onClick={()=> this.context.setKey('F#')}>F#</button>
          <button className='key' onClick={()=> this.context.setKey('G')}>G</button>
          <button className='key' onClick={()=> this.context.setKey('G#')}>G#</button>
        </div>

        <div className='tonic-select'>
          <button className='tonic' onClick={()=> this.context.setTonic('Major')}>Major</button>
          <button className='tonic' onClick={()=> this.context.setTonic('Minor')}>Minor</button>
        </div>

        <nav>
          <Link to='/'>
            <button className='nav'>Back</button>
          </Link>
         <Link to='/progression'>
           <button className='nav'>Next</button>
         </Link>
        </nav>
  
      </>
    )
  }
}