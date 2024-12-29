import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
     <div className='logo'>
      <img src='./public/images/brand_logo.png' alt='logo'/>
      </div>
      <ul className='navlist'>
        <li>MENU</li> 
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li> 
      </ul> 
      <div >
        <button className='button'>Login</button>
      </div>
    </nav>
  )
}

export default Navbar
