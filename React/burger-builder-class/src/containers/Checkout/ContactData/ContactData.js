import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import { connect } from 'react-redux'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index'

export class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: { type: 'text', placeholder: 'Your Name' },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      street: {
        elementType: 'input',
        elementConfig: { type: 'text', placeholder: 'Street' },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      zipcode: {
        elementType: 'input',
        elementConfig: { type: 'text', placeholder: 'ZIP Code' },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      country: {
        elementType: 'input',
        elementConfig: { type: 'text', placeholder: 'Country' },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      email: {
        elementType: 'input',
        elementConfig: { type: 'email', placeholder: 'Your E-mail' },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' }
          ]
        },
        validation: {},
        value: ''
      }
    }
  }

  orderHandler = (event) => {
    event.preventDefault()
    const formData = {}
    for (let elementKey in this.state.orderForm) {
      formData[elementKey] = this.state.orderForm[elementKey].value
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    }
    this.props.onOrderBurger(order, this.props.token)
  }

  inputChangedHandler = (event, id) => {
    const updatedOrderForm = { ...this.state.orderForm }
    const updatedFormElement = { ...updatedOrderForm[id] }
    updatedFormElement.value = event.target.value
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    )
    updatedOrderForm[id] = updatedFormElement
    this.setState({ orderForm: updatedOrderForm })
  }

  checkValidity = (value, rules) => {
    let isValid = false
    if (rules.required) {
      isValid = value.trim() !== ''
    }

    return isValid
  }

  render() {
    const formElements = []
    for (let key in this.state.orderForm) {
      formElements.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElements.map((element) => (
          <Input
            key={element.id}
            elementType={element.config.elementType}
            elementConfig={element.config.elementConfig}
            value={element.config.value}
            changed={(event) => this.inputChangedHandler(event, element.id)}
          />
        ))}
        <Button btnType="success">Order</Button>
      </form>
    )

    if (this.props.loading) {
      form = <Spinner />
    }
    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    token: state.auth.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData, token) =>
      dispatch(actions.purchaseBurger(orderData, token))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios))
