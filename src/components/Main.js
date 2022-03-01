import React, { useState } from 'react'
import FirstContent from './FirstContent'
import SecondContent from './SecondContent'
import ThirdContent from './ThirdContent'

const Main = () => {
    const [active, setActive] =useState(null)
  return (
    <div>
        <button onClick={() =>setActive('first')}>who am I</button>
        <button onClick={() =>setActive('second')}>where I live</button>
        <button onClick={() =>setActive('third')}>My age</button>

        {
            active === 'first' && <FirstContent />
            
        }
        {
            active === 'second' && <SecondContent />
        }
        {
            active === 'third' && <ThirdContent />
        }
    </div>
  )
}

export default Main