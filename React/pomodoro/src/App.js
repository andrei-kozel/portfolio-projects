import React from 'react'
import './App.css'

import Circle from './components/Circle/Circle'

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <p>Navigation goes here</p>
        <div>
          <Circle />
        </div>
        <p>Footer goes here</p>
      </div>
    </React.Fragment>
  )
}

export default App
