import React from 'react'
import { useCalcContext } from '../../hooks/useCalcContext'

const Test = () => {

    const {cek} = useCalcContext();
  return (
    <div>Test

        <button onClick={cek}></button>
    </div>
  )
}

export default Test