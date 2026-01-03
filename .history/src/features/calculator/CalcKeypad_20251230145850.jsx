import React from 'react';
import { useCalcContext } from '../../hooks/useCalcContext';

const CalcKeypad = () => {

    const {display} = useCalcContext();

  return (
    <div className="rounded-lg p-4 shadow-[0_0_10px_rgba(0,0,0,0.3)] w-full">
      <div className='flex gap-4'>
        <button
        on 
        className="h-10 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">1</button>
        <button
        on 
        className="h-10 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">+</button>
        <button
        on 
        className="h-10 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">3</button>
      </div>
    </div>
  );
};

export default CalcKeypad;
