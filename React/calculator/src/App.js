import React, { useState } from 'react'
import './App.css'
import { evaluate } from 'mathjs'

import Screen from './components/Screen/Screen'
import Button from './components/Button/Button'

function App() {
  const [buttons, setButtons] = useState([
    { type: 'RESET', title: 'AC' },
    { type: 'OPERATOR', title: '/' },
    { type: 'OPERATOR', title: '*' },
    { type: 'NUMBER', title: '7' },
    { type: 'NUMBER', title: '8' },
    { type: 'NUMBER', title: '9' },
    { type: 'OPERATOR', title: '-' },
    { type: 'NUMBER', title: '4' },
    { type: 'NUMBER', title: '5' },
    { type: 'NUMBER', title: '6' },
    { type: 'OPERATOR', title: '+' },
    { type: 'NUMBER', title: '1' },
    { type: 'NUMBER', title: '2' },
    { type: 'NUMBER', title: '3' },
    { type: 'RESULT', title: '=' },
    { type: 'NUMBER', title: '0' },
    { type: 'DECIMAL', title: '.' }
  ])
  const [input, setInput] = useState('0')
  const [history, setHistory] = useState('0')

  const handlePressButton = async (button) => {
    switch (button.type) {
      case 'RESET':
        setInput('0')
        setHistory('0')
        break
      case 'NUMBER':
        if (input === '0') {
          setInput(button.title)
        } else if (input.length >= 1 && input !== '0') {
          setInput((prevState) => prevState + button.title)
        }
        break
      case 'OPERATOR':
        if (isNaN(history[history.length - 1]) && input === '0') {
          let newHistory = history.slice(0, -1) + button.title
          setHistory(newHistory)
          break
        }
        if (history === '0') {
          setHistory(input + button.title)
        } else {
          setHistory((prevState) => prevState + input + button.title)
        }
        setInput('0')
        break
      case 'DECIMAL':
        if (!input.includes('.')) {
          setInput((prevState) => prevState + button.title)
        }
        break
      case 'RESULT':
        const result = getResult(history + input)
        setInput(result)
        setHistory(result)
        break
      default:
        return {}
    }
  }

  const getResult = (expression) => {
    return evaluate(expression)
  }

  return (
    <div className="App">
      <div className="calculator-container">
        <Screen value={input} history={history} />
        <div className="button-container">
          {buttons.map((button, index) => {
            return (
              <Button
                key={index}
                title={button.title}
                clicked={() => {
                  handlePressButton(button)
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
