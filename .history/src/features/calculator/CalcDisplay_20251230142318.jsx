import React from 'react';
import { useCalcContext } from '../../hooks/useCalcContext';

const CalcDisplay = () => {
  const { display, handleButtonClick } = useCalcContext();

  return (
    <div>d
        <input 
        type="text"
        className='border-none shadow-2xl '
        />
    </div>
  )
};

export default CalcDisplay;
