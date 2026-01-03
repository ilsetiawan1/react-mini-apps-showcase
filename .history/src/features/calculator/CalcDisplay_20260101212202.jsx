import React from 'react';
import { useCalcContext } from '../../hooks/useCalcContext';

const CalcDisplay = () => {
  const { testResult } = useCalcContext();

  return (
    <div className="w-full">
      <input
        value={display.replaceAll('/', '÷').replaceAll('*', '×')}
        type="text"
        readOnly
        className="
        rounded-lg
        shadow-[0_0_10px_rgba(0,0,0,0.3)] 
        p-4
        w-full
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
