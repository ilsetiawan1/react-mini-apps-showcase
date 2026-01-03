import React from 'react'
import { useCalcContext } from '../../hooks/useCalcContext'

const Test = () => {

    const {cek} = useCalcContext();
  return (
    <section>

        <button onClick={cek}>Klik</button>
    </section>
  )
}

export default Test