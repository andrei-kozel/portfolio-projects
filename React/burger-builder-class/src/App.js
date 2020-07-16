import React, { Component } from 'react'
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckOut from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'
import { connect } from 'react-redux'
import * as actions from './store/actions/index'

class App extends Component {
  componentDidMount() {
    this.props.onAutoSignUp()
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    )

    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/checkout" component={CheckOut} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      )
    }

    return (
      <div className="App">
        <Layout>{routes}</Layout>
      </div>
    )
  }
}

const mapStateToPRops = (state) => {
  return {
    isAuth: state.auth.token !== null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToPRops, mapDispatchToProps)(App))
