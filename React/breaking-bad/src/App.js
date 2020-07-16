import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import CharactersList from './components/characters/CharactersList'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      setItems(result.data)
      setIsLoading(false)
    }

    fetchData()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharactersList items={items} isLoading={isLoading} />
    </div>
  )
}

export default App
