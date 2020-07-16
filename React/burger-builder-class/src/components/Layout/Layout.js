import React, { useState } from 'react'
import RAux from '../../hoc/RAux'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import './Layout.css'
import { useSelector } from 'react-redux'

const Layout = (props) => {
  const [showDrawer, setShowDrawer] = useState(false)
  const isAuthenticated = useSelector((state) => state.auth.token) !== null

  const closeSideDeawerHandler = () => {
    setShowDrawer(false)
  }

  const openSideDrawerHandler = () => {
    setShowDrawer(true)
  }

  return (
    <RAux>
      <Toolbar
        openSideDrawer={openSideDrawerHandler}
        isAuth={isAuthenticated}
      />
      <SideDrawer
        show={showDrawer}
        closed={closeSideDeawerHandler}
        isAuth={isAuthenticated}
      />
      <main className="content">{props.children}</main>
    </RAux>
  )
}

export default Layout
