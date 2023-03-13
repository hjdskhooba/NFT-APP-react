import React, { useState } from 'react'

const Discover = () => {
    const [value, setValue] = useState('5')
    const range = (e) => {
        setValue(e.target.value)
    }
  return (
    <div className='discover'>
        <div className="container">
            <h2>{value}</h2>
            <input type="range" step='10' onInput={(e)=>range(e)} />
        </div>
    </div>
  )
}

export default Discover