import React from 'react';
import { useCalcContext } from '../../hooks/useCalcContext';

const CalcDisplay = () => {
  const { display, handleButtonClick } = useCalcContext();

  return (
    <div>
        <input 
        type="text"
        
        />
    </div>
  )
};

export default CalcDisplay;
