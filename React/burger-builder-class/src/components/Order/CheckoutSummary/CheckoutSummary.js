import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import './CheckoutSummary.css'

const CheckoutSummary = (props) => {
  return (
    <div className="checkoutSummary">
      <h1>We hope is tastes well!</h1>
      <div style={{ width: '100%', height: '400px', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="danger" clicked={props.checkoutCanceled}>
        Cancel
      </Button>
      <Button btnType="success" clicked={props.checkoutContinued}>
        Continue
      </Button>
    </div>
  )
}

export default CheckoutSummary
