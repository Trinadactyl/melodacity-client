import React from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';


export default function Header() {

  return <>
    {/* <Router> */}
      <header>
        <Link to='/'>
          <h1 className="h">Melodactity</h1>
        </Link>

        {/* <Link to='/user'>
          <button className='purple-btn'>
            My Melodies
          </button>
        </Link> */}

      </header> 
    {/* </Router> */}
  </>
}