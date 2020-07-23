import React from 'react'
import './index.css'

const Screen = (props) => {
  return (
    <div className="screen">
      <p className="history">{props.history}</p>
      <p className="main">{props.value}</p>
    </div>
  )
}

export default Screen
