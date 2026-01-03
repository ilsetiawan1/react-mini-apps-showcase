import React from 'react';
import { useCalcContext } from '../../hooks/useCalcContext';

const CalcDisplay = () => {
  const { display, testResult } = useCalcContext();

  return (
    <div className="w-full">
      <input type="text" />
      <button onClick={() => testResult()}>Klik</button>
    </div>
  );
};

export default CalcDisplay;
