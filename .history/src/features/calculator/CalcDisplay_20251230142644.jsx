import React from 'react';
import { useCalcContext } from '../../hooks/useCalcContext';

const CalcDisplay = () => {
  const { display, handleButtonClick } = useCalcContext();

  return (
    <div className='flex justify-center'>
        <input 
        type="text"
        readOnly
        className='target shadow-md p-4'
        />
    </div>
  )
};

export default CalcDisplay;
