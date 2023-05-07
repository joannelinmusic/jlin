import React, { Children, useImperativeHandle } from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navigation(){
  
  return <nav className='nav'>
    <Link to='/' className='site_title'>
      Joanne Lin
    </Link>
    
    <ul>
      <CustomLink to='/About'>About</CustomLink>
      <CustomLink to='/Projects'>Projects</CustomLink>
      <CustomLink to='/Gallery'>Gallery</CustomLink>
      <CustomLink to='/Contact'>Contact</CustomLink>
      
      
    </ul>
  </nav>
}

function CustomLink ({to, children,...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end : true})
  return (
    <li className={isActive ? "active":""}>
        <Link to={to} className='nav_link'>
          {children}
        </Link>
      </li>
  )
}
