import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';


export default function Header () {

 
  return <>
    
    <header className='header'>
      <Link to='/'>
        <h1>Melodactity!</h1>
      </Link>

      <Link to='/user'>
        <button className='melodies-button'>
          View all the Melodies!
        </button>
      </Link>
    </header>
    
  </>
}