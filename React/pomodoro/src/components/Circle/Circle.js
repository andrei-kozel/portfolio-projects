import React, { useState } from 'react'
import './Circle.css'

import NumberCard from '../NuberCard/NumberCard'

const Circle = () => {
  const [minutes, setMinutes] = useState('25')
  const [seconds, setSeconds] = useState('00')

  const handleChangeValue = (type, value) => {
    value = value.replace(/[^0-9]/g, '')
    switch (type) {
      case 'MINUTES':
        setMinutes(value)
        break
      case 'SECONDS':
        setSeconds(value)
        break
      default:
        break
    }
  }

  return (
    <div className="circle">
      <div className="timer">
        <NumberCard
          type="MINUTES"
          value={minutes}
          changed={handleChangeValue}
        />
        <span>:</span>
        <NumberCard
          type="SECONDS"
          value={seconds}
          changed={handleChangeValue}
        />
      </div>
    </div>
  )
}

export default Circle
