import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
  <ul className="navigationItems">
    <NavigationItem link="/" activeOnlyWhenExact={true}>
      Burger builder
    </NavigationItem>

    {props.isAuth ? (
      <React.Fragment>
        <NavigationItem link="/orders">Orders</NavigationItem>
        <NavigationItem link="/logout">Log Out</NavigationItem>
      </React.Fragment>
    ) : (
      <NavigationItem link="/auth">Log In</NavigationItem>
    )}
  </ul>
)

export default navigationItems
