import React from 'react';
import { useCalcContext } from '../../hooks/useCalcContext';

const CalcKeypad = () => {
  const { handleButtonClick, deleteClick, testResult } = useCalcContext();

  return (
    <div className="rounded-lg p-4 mt-4 shadow-[0_0_10px_rgba(0,0,0,0.3)] w-full">
      <div className="grid grid-cols-12 gap-4">
        {/* Rows 1 */}
        <button onClick={() => handleButtonClick('1')} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          1
        </button>

        <button onClick={() => handleButtonClick('2')} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          2
        </button>

        <button onClick={() => handleButtonClick('3')} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          3
        </button>

        <button onClick={() => handleButtonClick('÷')} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          ÷
        </button>

        {/* Row 2 */}
        <button onClick={() => handleButtonClick('4')} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          4
        </button>

        <button onClick={() => handleButtonClick('5')} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          5
        </button>

        <button onClick={() => handleButtonClick('6')} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          6
        </button>

        <button onClick={() => handleButtonClick('x')} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          x
        </button>

        {/* Row 2 */}
        <button onClick={() => handleButtonClick('7')} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          7
        </button>

        <button onClick={() => handleButtonClick('8')} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          8
        </button>

        <button onClick={() => handleButtonClick('9')} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          9
        </button>

        <button onClick={() => handleButtonClick('-')} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          -
        </button>

        {/* Row 2 */}
        <button onClick={() => handleButtonClick('.')} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          .
        </button>

        <button onClick={() => handleButtonClick('0')} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          0
        </button>

        <button onClick={() => deleteClick()} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          c
        </button>

        <button onClick={() => handleButtonClick('+')} className="col-span-3 h-15 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          +
        </button>

        {/* Result */}
        <button onClick={() => testResult()} className="col-span-12 h-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          =
        </button>
        {/* Result */}
        <button onClick={() => testResult()} className="col-span-12 h-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          =
        </button>
      </div>
    </div>
  );
};

export default CalcKeypad;
