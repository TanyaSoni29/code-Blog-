import React from 'react'
import "./Spinner.css"

function Spinner() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='spinner'></div>
      <div>Loading...</div>
    </div>
  )
}

export default Spinner
