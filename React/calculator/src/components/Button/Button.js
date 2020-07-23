import React from 'react'
import './index.css'

const Button = (props) => {
  const styles = ['button']

  if (props.title === 'AC') {
    styles.push('button-ac')
  } else if (props.title === '=') {
    styles.push('button-equal')
  } else if (props.title === '0') {
    styles.push('button-0')
  }

  return (
    <div className={styles.join(' ')} onClick={props.clicked}>
      {props.title}
    </div>
  )
}

export default Button
