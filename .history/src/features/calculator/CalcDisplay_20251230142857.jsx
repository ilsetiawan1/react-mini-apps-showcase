import React from 'react';
import { useCalcContext } from '../../hooks/useCalcContext';

const CalcDisplay = () => {
  const { display, handleButtonClick } = useCalcContext();

  return (
    <div className="flex justify-center">
      <input
        type="text"
        readOnly
        className="
        shadow-md 
        p-4
        w-full
        md-w
        outline-none
    focus:outline-none
    focus:ring-0
    focus:border-none
    cursor-default"
      />
    </div>
  );
};

export default CalcDisplay;
