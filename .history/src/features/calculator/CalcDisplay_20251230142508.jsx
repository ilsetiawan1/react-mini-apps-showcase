import React from 'react';
import { useCalcContext } from '../../hooks/useCalcContext';

const CalcDisplay = () => {
  const { display, handleButtonClick } = useCalcContext();

  return (
    <div>
        <input 
        type="text"
        className='bg-amber-300 shadow-2xl p-4'
        />
    </div>
  )
};

export default CalcDisplay;
