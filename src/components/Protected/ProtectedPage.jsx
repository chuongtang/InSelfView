import React from 'react'
import Recorder from '../Protected/Recorder'
import Questions from './Questions'
import Header from '../Header'

const ProtectedPage = () => {
  return (
    <div>
      <Header />
      <Recorder />
      <Questions />
    </div>
  )
}

export default ProtectedPage