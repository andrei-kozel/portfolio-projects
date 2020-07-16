import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'

export class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token)
  }
  render() {
    let orders = !this.props.orders ? (
      <Spinner />
    ) : (
      <div>
        {this.props.orders.map((order) => {
          return (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={order.price}
            />
          )
        })}
      </div>
    )
    return <div>{orders}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.order.loading,
    orders: state.order.orders,
    token: state.auth.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token) => dispatch(actionTypes.fetchOrders(token))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios))
