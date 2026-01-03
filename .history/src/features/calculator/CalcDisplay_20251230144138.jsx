import React from 'react';
import { useCalcContext } from '../../hooks/useCalcContext';

const CalcDisplay = () => {
  const { display, handleButtonClick, testResult } = useCalcContext();

  return (
    <div className="flex">
      <input
        type="text"
        // readOnly
        className="
        shadow-md 
        p-4
        w-full
        outline-none
    focus:outline-none
    focus:ring-0
    focus:border-none
    cursor-default"
      />
    <button onClick={() => testResult()}>Klik</button>
    </div>
  );
};

export default CalcDisplay;
