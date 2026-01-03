import React from 'react';
import { useCalcContext } from '../../hooks/useCalcContext';

const CalcDisplay = () => {
  const { display, handleButtonClick } = useCalcContext();

  return (
    <div className='flex justify-center'>
        <input 
        type="text"
        className='bg-amber-300 shadow-md p-4'
        />
    </div>
  )
};

export default CalcDisplay;
