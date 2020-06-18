import React from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './Header.css';


export default function Header () {

  return <>
    {/* <Router> */}
      <header className='header'>
        <Link to='/'>
          <h1>Melodactity</h1>
        </Link>

        <Link to='/user'>
          <button className='purple-btn'>
            My Melodies
          </button>
        </Link>

{/* Nav select bar */}
      {/* <select for='nav'> 
      <Link to='/user'>
        <option className='account-page'>
          My Account
        </option>
      </Link>
        <option>Select Key</option>
        <option>Select Progression</option>
        <option>Jam!</option>
      </select> */}


      </header> 
    {/* </Router> */}
  </>
}