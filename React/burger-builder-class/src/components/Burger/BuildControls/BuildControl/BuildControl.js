import React from 'react'
import './BuildControl.css'

const buildControl = (props) => {
  return (
    <div className="buildControl">
      <div className="label">{props.label}</div>
      <button
        className="less"
        onClick={props.deleteIngredient}
        disabled={props.disabled}>
        Less
      </button>
      <button className="more" onClick={props.addIngredient}>
        More
      </button>
    </div>
  )
}

export default buildControl
