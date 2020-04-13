import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

export default function Header () {
  return (
    <header className='Header'>
      <Link to='/'>
        <h1>Welcome to Melodactity!</h1>
      </Link>
    </header>
  )
}