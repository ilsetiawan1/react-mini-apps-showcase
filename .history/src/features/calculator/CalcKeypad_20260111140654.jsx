import React from 'react';
import { useCalcContext } from '../../hooks/useCalcContext';

const CalcKeypad = () => {
  const { handleButtonClick, deleteClick, result, clearAll } = useCalcContext();


  const btnBase = 'col-span-3 text-2xl md:text-3xl h-15 shadow-[0_0_10px_rgba(0,0,0,0.3)]';
  const numColor = `${btnBase} `;
  const opColor = `${btnBase} bg-slate-200`;
  const actionColor = `${btnBase} `;

  // 5. Khusus tombol lebar (0 dan AC) - ingat: batalkan aspect-square!
  const wideBtn = ' ';

  return (
    <div className="w-full mt-6">
      <div className="grid grid-cols-12 gap-3">

        {/* Baris 1 */}
        <button onClick={clearAll} className={`${actionColor} col-span-6`}>
          AC
        </button>
        <button onClick={deleteClick} className={`${actionColor}`}>
          DEL
        </button>
        <button onClick={() => handleButtonClick('÷')} className={`${opColor}`}>
          ÷
        </button>

        {/* Baris 2 */}
        <button onClick={() => handleButtonClick('7')} className={`${numColor}`}>
          7
        </button>
        <button onClick={() => handleButtonClick('8')} className={`${numColor}`}>
          8
        </button>
        <button onClick={() => handleButtonClick('9')} className={`${numColor}`}>
          9
        </button>
        <button onClick={() => handleButtonClick('x')} className={`${opColor}`}>
          ×
        </button>

        {/* Baris 3 */}
        <button onClick={() => handleButtonClick('4')} className={`${numColor}`}>
          4
        </button>
        <button onClick={() => handleButtonClick('5')} className={`${numColor}`}>
          5
        </button>
        <button onClick={() => handleButtonClick('6')} className={`${numColor}`}>
          6
        </button>
        <button onClick={() => handleButtonClick('-')} className={`${opColor}`}>
          -
        </button>

        {/* Baris 4 */}
        <button onClick={() => handleButtonClick('1')} className={`${numColor}`}>
          1
        </button>
        <button onClick={() => handleButtonClick('2')} className={`${numColor}`}>
          2
        </button>
        <button onClick={() => handleButtonClick('3')} className={`${numColor}`}>
          3
        </button>
        <button onClick={() => handleButtonClick('+')} className={`${opColor}`}>
          +
        </button>

        {/* Baris 5 */}
        <button onClick={() => handleButtonClick('0')} className={`${numColor} col-span-6`}>
          0
        </button>
        <button onClick={() => handleButtonClick('.')} className={`${numColor}`}>
          .
        </button>
        <button onClick={result} className={`${numColor}`}>
          =
        </button>
      </div>
    </div>
  );
};

export default CalcKeypad;
