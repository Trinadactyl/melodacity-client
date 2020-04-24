import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Jambtn.css'
//import { Route } from 'react-router-dom';
//import KeySelect from '../KeySelect/KeySelect';

export default class Jambtn extends Component {
 
  render() {
    return (
    <Link to='/select-key'>
      <button className='Jambtn'> 
          JAM!        
      </button>
      </Link>
    )
  }
}