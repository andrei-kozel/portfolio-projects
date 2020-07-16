import React from 'react'
import RAux from '../../../hoc/RAux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map(
    (indredientKey, index) => {
      return (
        <li key={index}>
          <span style={{ textTransform: 'capitalize' }}>{indredientKey}</span>:{' '}
          {props.ingredients[indredientKey]}
        </li>
      )
    }
  )

  return (
    <RAux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total price: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="danger" clicked={props.cancelPurchase}>
        CANCEL
      </Button>
      <Button btnType="success" clicked={props.continuePurchase}>
        CONTINUE
      </Button>
    </RAux>
  )
}

export default orderSummary
