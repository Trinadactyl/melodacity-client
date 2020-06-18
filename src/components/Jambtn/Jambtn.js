import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Jambtn.css'
//import { Route } from 'react-router-dom';
//import KeySelect from '../KeySelect/KeySelect';

export default class Jambtn extends Component {
 
  render() {
    return (
    <Router>
     <Link to='/select-key'>
      <button className='Jambtn'> 
          JAM!        
      </button>
      </Link> 
    </Router>
    
    )
  }
}