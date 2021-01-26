import React, { Component } from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Jambtn.css'

export default class Jambtn extends Component {
 
  render() {
    return (
    // <Router>
     <Link to='/select-key'>
      <button className='Jambtn'> 
          START        
      </button>
      </Link> 
    //</Router>
    )
  }
}