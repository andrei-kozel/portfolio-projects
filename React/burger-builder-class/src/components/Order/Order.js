import React from 'react'
import './Order.css'

const Order = (props) => {
  const ingredients = []

  for (let ingredientsName in props.ingredients) {
    ingredients.push({
      name: ingredientsName,
      amount: props.ingredients[ingredientsName]
    })
  }

  const ingredientsOutput = ingredients.map((ing) => {
    return (
      <span
        key={ing.name}
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px'
        }}>
        {ing.name}({ing.amount})
      </span>
    )
  })

  return (
    <div className="Order">
      <p>Ingredients: {ingredientsOutput}</p>
      <p>
        Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  )
}

export default Order
