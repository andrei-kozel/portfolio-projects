import React from 'react'
import RAux from '../../../hoc/RAux'
import Backdrop from '../Backdrop/Backdrop'
import './Modal.css'

const modal = (props) => (
  <RAux>
    <Backdrop show={props.show} closeBackdrop={props.closeBackdrop} />
    <div
      className="modal"
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
  </RAux>
)

export default modal
