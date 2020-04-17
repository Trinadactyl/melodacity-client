import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Route } from 'react-router-dom';
//import notes from '../notes'

export default class KeySelect extends Component {
  constructor(props) {
    super(props)  
    this.state = {
    key: '',
    tonic:''
    }
  }


  handleKeySelect(key) {
    this.setState(state => ({
      key: key 
    }))
  }

  handleTonicSelect(tonic) {
    this.setState(state => ({
      tonic: tonic
    }))
  }
  

  render () {
    return (
      <>

        <h1>Choose a Key</h1>

        <div className='key-select'>     
          <button className='key' onClick={()=> this.handleKeySelect('A')}>A</button>
          <button className='key' onClick={()=> this.handleKeySelect('A#')}>A#</button>
          <button className='key' onClick={()=> this.handleKeySelect('B')}>B</button>
          <button className='key' onClick={()=> this.handleKeySelect('C')}>C</button>
          <button className='key' onClick={()=> this.handleKeySelect('C#')}>C#</button>
          <button className='key' onClick={()=> this.handleKeySelect('D')}>D</button>
          <button className='key' onClick={()=> this.handleKeySelect('D#')}>D#</button>
          <button className='key' onClick={()=> this.handleKeySelect('E')}>E</button>
          <button className='key' onClick={()=> this.handleKeySelect('F')}>F</button>
          <button className='key' onClick={()=> this.handleKeySelect('F#')}>F#</button>
          <button className='key' onClick={()=> this.handleKeySelect('G')}>G</button>
          <button className='key' onClick={()=> this.handleKeySelect('G#')}>G#</button>
        </div>

        <div className='tonic-select'>
          <button onClick={()=> this.handleTonicSelect('Major')}>Major</button>
          <button onClick={()=> this.handleTonicSelect('Minor')}>Minor</button>
        </div>

        <nav>
          <Link to='/progression'>
            <button>Next</button>
          </Link>
         <Link to='/'>
           <button>Back</button>
         </Link>
        </nav>
  
      </>
    )
  }
}