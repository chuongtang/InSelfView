import React from 'react'
import { Alert } from '@windmill/react-ui'

const AlertMsg = ({ type, message }) => {


  return (
    <div >
      <Alert type={type} className="max-w-lg mx-auto">{message}</Alert>
    </div>
  )
}

AlertMsg.defaultProps = {
  type: 'info',
}

export default AlertMsg;