import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <div className='headers'>
    <header className='navbar'>
        <nav>
            <NavLink id='logos_nav' 
            to="/" className={({ isActive }) => (isActive ? 'inactive' : 'inactive')}>
            <img className='logos_2' src={require('../name-head.png')} alt=''/></NavLink>
            <NavLink id='shift_nav' 
            to="/vision"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}

            >Vision</NavLink>
            <NavLink id='shift_nav'
            to="/explore"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}

            >Explore</NavLink>

            {/* <NavLink id='shift_nav2'
            to="/opportunities"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}

            >Opportunities</NavLink> */}

            <NavLink id='shift_nav' 
            to="/reach-out"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}

            >About us</NavLink>

        </nav>
    </header>
    <Outlet />
    </div>
  )
}

export default Header
