import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';


//this is the popup function - how to I write in correctly?
// const handleClick = (e) => {
//   alert((
//     <div>
//       <Link to={'/'}>
//         Home
//       </Link>
//       <Link to={'/account'}>
//         Account
//       </Link>
//       <Link to={'/settings'}>
//         Settings
//       </Link>
//     </div>
//   ))
// }



export default function Header () {

 
  return <>
    
    <header className='Header'>
      <Link to='/'>
        <h1>Melodactity!</h1>
      </Link>

      <Link to='/user'>
        <button className='settings-button'>
          Go to my account
        </button>
      </Link>
    </header>
    
  </>
}