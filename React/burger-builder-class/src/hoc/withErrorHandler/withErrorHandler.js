import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/Modal'
import RAux from '../RAux'

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    componentDidMount() {
      axios.interceptors.request.use((req) => {
        this.setState({ error: null })
        return req
      })
      axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error })
        }
      )
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null })
    }

    render() {
      return (
        <RAux>
          <Modal
            show={this.state.error}
            closeBackdrop={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </RAux>
      )
    }
  }
}

export default withErrorHandler
