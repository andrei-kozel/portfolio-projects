import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route, Redirect } from 'react-router-dom'
import ContactData from './ContactData/ContactData'
import { connect } from 'react-redux'

export class CheckOut extends Component {
  checkoutCanceledHandler = () => {
    this.props.history.goBack()
  }

  checkoutContinuedHandler = () => {
    this.props.history.push('/checkout/contact-data')
  }

  render() {
    let summary = <Redirect to="/" />
    if (this.props.ingredients) {
      const perchaseRedirect = this.props.purchased ? <Redirect to="/" /> : null
      summary = (
        <div>
          {perchaseRedirect}
          <CheckoutSummary
            ingredients={this.props.ingredients}
            checkoutCanceled={this.checkoutCanceledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          />
          <Route
            path={this.props.match.path + '/contact-data'}
            component={ContactData}
          />
        </div>
      )
    }
    return <div>{summary}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  }
}

export default connect(mapStateToProps)(CheckOut)