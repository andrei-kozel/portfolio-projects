import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import './SideDrawer.css'
import RAux from '../../../hoc/RAux'

const sideDrawer = (props) => {
  let attachedClasses = ['sideDrawer', 'close']
  if (props.show) {
    attachedClasses = ['sideDrawer', 'open']
  }
  return (
    <RAux>
      <Backdrop show={props.show} closeBackdrop={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <Logo height="11%" />
        <nav>
          <NavigationItems isAuth={props.isAuth} />
        </nav>
      </div>
    </RAux>
  )
}

export default sideDrawer
