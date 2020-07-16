import React, { Component } from 'react'
import RAux from '../../hoc/RAux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false
  }

  componentDidMount() {
    this.props.onInitIngredients()
  }

  purchaseHandler = () => {
    if (this.props.isAuth) {
      this.setState({ purchasing: true })
    } else {
      this.props.history.push('/auth')
    }
  }

  cancelPurchaseHandler = () => {
    this.setState({ purchasing: false })
  }

  continueCheckoutHandler = () => {
    const queryParams = []
    for (let i in this.props.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          '=' +
          encodeURIComponent(this.props.ingredients[i])
      )
    }
    queryParams.push('price=' + this.props.price)
    const queryString = queryParams.join('&')
    this.props.onInitPurchase()
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    })
  }

  render() {
    const disabledInfo = { ...this.props.ingredients }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null

    let burger = this.props.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    )

    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    if (this.props.ingredients) {
      burger = (
        <RAux>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            addIngredient={this.props.onIngredientAdded}
            deleteIngredient={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            price={this.props.price}
            purchase={this.purchaseHandler}
            isAuth={this.props.isAuth}
          />
        </RAux>
      )

      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredients}
          cancelPurchase={this.cancelPurchaseHandler}
          continuePurchase={this.continueCheckoutHandler}
          price={this.props.price}
        />
      )
    }

    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <RAux>
        <Modal
          show={this.state.purchasing}
          closeBackdrop={this.cancelPurchaseHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </RAux>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuth: state.auth.token !== null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (name) => dispatch(actions.addIngredient(name)),
    onIngredientRemoved: (name) => dispatch(actions.removeIngredient(name)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios))
