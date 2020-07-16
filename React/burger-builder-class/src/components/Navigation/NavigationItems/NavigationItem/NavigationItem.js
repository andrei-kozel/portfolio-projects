import React from 'react'
import './NavigationItem.css'
import { Link, useRouteMatch } from 'react-router-dom'

const NavigationItem = (props) => {
  let match = useRouteMatch({
    path: props.link,
    exact: props.activeOnlyWhenExact
  })
  return (
    <li className="navigationItem">
      <Link to={props.link} className={match ? 'active' : null}>
        {props.children}
      </Link>
    </li>
  )
}

export default NavigationItem
