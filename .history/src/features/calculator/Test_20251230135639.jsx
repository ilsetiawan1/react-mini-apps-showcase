import React from 'react'
import { useCalcContext } from '../../hooks/useCalcContext'

const Test = () => {

    const {cek} = useCalcContext();
  return (
    <div>

        <button onClick={cek}>Klik</button>
    </div>
  )
}

export default Test