import * as actionTypes from './actions'
import axios from '../../axios-orders'

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    id,
    orderData
  }
}

export const purchaseProductFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error
  }
}

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  }
}

export const purchaseBurger = (orderData, token) => {
  return (dispatch) => {
    dispatch(purchaseBurgerStart())
    axios
      .post('/orders.json?auth=' + token, orderData)
      .then((response) => {
        dispatch(purchaseBurgerSuccess(response.data.name, orderData))
      })
      .catch((error) => {
        dispatch(purchaseProductFail(error))
      })
  }
}

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  }
}

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders
  }
}

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error
  }
}

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  }
}

export const fetchOrders = (token) => {
  return (dispatch) => {
    axios
      .get('/orders.json?auth=' + token)
      .then((response) => {
        const fetchedOrders = []
        for (let key in response.data) {
          fetchedOrders.push({ ...response.data[key], id: key })
        }
        dispatch(fetchOrdersSuccess(fetchedOrders))
      })
      .catch((error) => {
        dispatch(fetchOrdersFail(error))
      })
  }
}
