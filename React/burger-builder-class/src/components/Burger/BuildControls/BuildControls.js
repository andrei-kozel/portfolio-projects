import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import './BuildControls.css'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => {
  return (
    <div className="buildControls">
      <p>
        Current price: <strong>${props.price.toFixed(2)}</strong>
      </p>
      {controls.map((c) => (
        <BuildControl
          key={c.label}
          label={c.label}
          addIngredient={() => props.addIngredient(c.type)}
          deleteIngredient={() => props.deleteIngredient(c.type)}
          disabled={props.disabled[c.type]}
        />
      ))}
      <button
        className="order"
        disabled={props.price <= 0}
        onClick={props.purchase}>
        {props.isAuth ? 'ORDER NOW' : 'SIGN UP'}
      </button>
    </div>
  )
}

export default buildControls
