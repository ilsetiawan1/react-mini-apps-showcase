import React from 'react';
import { useCalcContext } from '../../hooks/useCalcContext';

const CalcKeypad = () => {
  const { display, handleButtonClick } = useCalcContext();

  return (
    <div className="rounded-lg p-4 shadow-[0_0_10px_rgba(0,0,0,0.3)] w-full">
      <div className="grid grid-cols-12 gap-4">
        {/* Rows 1 */}
        <button onClick={() => handleButtonClick('C')} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          C
        </button>

        <button onClick={() => handleButtonClick("1")} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          +
        </button>

        <button onClick={() => handleButtonClick(e)} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          +
        </button>

        <button onClick={() => handleButtonClick(e)} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          +
        </button>

        {/* Row 2 */}
        <button onClick={() => handleButtonClick('e')} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          1
        </button>

        <button onClick={() => handleButtonClick(e)} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          +
        </button>

        <button onClick={() => handleButtonClick(e)} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          +
        </button>

        <button onClick={() => handleButtonClick(e)} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          +
        </button>
        
        {/* Row 2 */}
        <button onClick={() => handleButtonClick('e')} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          1
        </button>

        <button onClick={() => handleButtonClick(e)} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          +
        </button>

        <button onClick={() => handleButtonClick(e)} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          +
        </button>

        <button onClick={() => handleButtonClick(e)} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          +
        </button>
        
        {/* Row 2 */}
        <button onClick={() => handleButtonClick('e')} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          1
        </button>

        <button onClick={() => handleButtonClick(e)} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          +
        </button>

        <button onClick={() => handleButtonClick(e)} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          +
        </button>

        <button onClick={() => handleButtonClick(e)} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          +
        </button>
        <button onClick={() => handleButtonClick(e)} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          +
        </button>

      </div>
    </div>
  );
};

export default CalcKeypad;
