import React from 'react'

export default function Navigation(){
  return <nav className='nav'>
    <a href='/' className='site_title'>Joanne Lin</a>
    
    <ul>
      <li className='active'>
        <a href='/About' class='nav_link'> About</a>
      </li>
      <li>
        <a href='/Gallery' class='nav_link'>Gallery</a>
      </li>
    </ul>
  </nav>
}
