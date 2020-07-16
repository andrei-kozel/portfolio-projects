import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import Table from './components/Table'
import axios from 'axios'

const DEFAULT_QUERY = 'redux'
const PATH_BASE = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='
const PARAM_PAGE = 'page='

class App extends Component {
  state = {
    result: null,
    searchTerm: DEFAULT_QUERY
  }

  fetchSearchTopStories = async (searchTerm, page = 0) => {
    await axios
      .get(
        `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`
      )
      .then((response) => {
        this.setSearchTopResult(response.data)
      })
      .catch((error) => console.log(error))
  }

  componentDidMount() {
    this.fetchSearchTopStories(this.state.searchTerm)
  }

  onDismiss = (id) => {
    const updatedList = this.state.result.hits.filter(
      (item) => item.objectID !== id
    )
    this.setState({ result: { ...this.state.result, hits: updatedList } })
  }

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  onSearchSubmit = (event) => {
    this.fetchSearchTopStories(this.state.searchTerm)
    event.preventDefault()
  }

  setSearchTopResult = (result) => {
    const { hits, page } = result
    const oldHits = page !== 0 ? this.state.result.hits : []

    const updatedHits = [...oldHits, ...hits]
    console.log(updatedHits)

    this.setState({ result: { hits: updatedHits, page } })
  }

  render() {
    let table = <p>Loading</p>
    if (this.state.result) {
      table = (
        <Table list={this.state.result.hits} onDismiss={this.onDismiss}></Table>
      )
    }
    return (
      <div className="page">
        <div className="interactions">
          <Search
            onChange={this.onSearchChange}
            value={this.state.searchTerm}
            onSubmit={this.onSearchSubmit}>
            Search
          </Search>
        </div>
        {table}
        <div className="interactions">
          <button
            onClick={() =>
              this.fetchSearchTopStories(
                this.state.searchTerm,
                this.state.result.page + 1
              )
            }>
            More
          </button>
        </div>
      </div>
    )
  }
}

export default App
