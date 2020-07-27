import React from 'react'
import { FiSettings } from 'react-icons/fi'
import './index.css'

const SettingsButton = (props) => {
  return (
    <div className="settings-btn-container">
      <FiSettings className="settings-btn" />
    </div>
  )
}

export default SettingsButton
