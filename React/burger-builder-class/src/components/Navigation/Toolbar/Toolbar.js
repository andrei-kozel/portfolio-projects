import React from 'react'
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import Navigation from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => {
  return (
    <header className="toolbar">
      <DrawerToggle clicked={props.openSideDrawer} />
      <Logo height="80%" />
      <nav className="desktopOnly">
        <Navigation isAuth={props.isAuth} />
      </nav>
    </header>
  )
}

export default toolbar
