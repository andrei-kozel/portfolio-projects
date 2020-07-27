import React, { useState, useEffect } from 'react'
import './Circle.css'
import moment from 'moment'

import { useInterval } from '../../hooks/useInterval'

import NumberCard from '../NuberCard/NumberCard'
import Button from '../Button/Button'

const Circle = () => {
  const [settings, setSettings] = useState({
    minutes: '25',
    seconds: '00',
    restTime: '05'
  })
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()
  const [sessionTime, setSessionTime] = useState()
  const [restTime, setRestTime] = useState()
  const [mode, setMode] = useState('session')
  const [isRunning, setIsRunning] = useState(false)

  const handleChangeValue = (type, value) => {
    value = value.replace(/[^0-9]/g, '')
    switch (type) {
      case 'MINUTES':
        setSettings({ ...settings, minutes: value })
        break
      case 'SECONDS':
        setSettings({ ...settings, seconds: value })
        break
      default:
        break
    }
  }

  useInterval(() => setSessionTime(sessionTime - 1000), isRunning ? 1000 : null)

  useEffect(() => {
    setSessionTime(
      (parseInt(settings.minutes) * 60 + parseInt(settings.seconds)) * 1000
    )
    setRestTime(parseInt(settings.restTime) * 60 * 1000)
  }, [settings.minutes, settings.restTime, settings.seconds])

  useEffect(() => {
    setMinutes(moment(sessionTime).format('mm'))
    setSeconds(moment(sessionTime).format('ss'))
  }, [sessionTime])

  useEffect(() => {
    if (sessionTime === 0 && mode === 'session') {
      setMode('break')
      setSessionTime(restTime)
    } else if (sessionTime === 0 && mode === 'break') {
      setMode('session')
      setSessionTime(
        (parseInt(settings.minutes) * 60 + parseInt(settings.seconds)) * 1000
      )
    }
  }, [mode, restTime, sessionTime, settings.minutes, settings.seconds])

  return (
    <div className={['circle', mode === 'session' ? 'work' : 'rest'].join(' ')}>
      <div className="info-container">
        <div className="info">i</div>
      </div>
      <div className="timer">
        <NumberCard
          type="MINUTES"
          value={settings.minutes}
          changed={handleChangeValue}
          text={minutes}
        />
        <span>:</span>
        <NumberCard
          type="SECONDS"
          value={settings.seconds}
          changed={handleChangeValue}
          text={seconds}
        />
      </div>
      <Button
        playButton={() => setIsRunning(true)}
        pauseButton={() => setIsRunning(false)}
        isRunning={isRunning}
      />
    </div>
  )
}

export default Circle
