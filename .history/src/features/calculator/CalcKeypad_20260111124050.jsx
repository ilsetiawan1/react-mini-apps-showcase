import React from 'react';
import { useCalcContext } from '../../hooks/useCalcContext';

const CalcKeypad = () => {
  const { handleButtonClick, deleteClick, result, clearAll } = useCalcContext();

  // Helper untuk styling supaya kode tidak kotor
  const btnStyle = "col-span-3 aspect-square rounded-full shadow-md flex items-center justify-center text-xl font-semibold transition-all active:scale-95 active:shadow-inner";
  const numStyle = `${btnStyle} bg-white text-slate-800 hover:bg-slate-50`;
  const opStyle = `${btnStyle} bg-orange-500 text-white hover:bg-orange-600`;
  const actionStyle = `${btnStyle} bg-slate-200 text-slate-700 hover:bg-slate-300 text-sm`;
  const wideBtnStyle = "col-span-6 h-14 rounded-full shadow-md flex items-center justify-center text-xl font-semibold transition-all active:scale-95 bg-slate-800 text-white hover:bg-slate-900";

  return (
    <div className="w-full mt-6">
      <div className="grid grid-cols-12 gap-3">
        
        {/* Baris 1: Operator Pembersih & Bagi */}
        <button onClick={clearAll} className={`${actionStyle} col-span-6 !aspect-auto h-14`}>AC</button>
        <button onClick={deleteClick} className={actionStyle}>DEL</button>
        <button onClick={() => handleButtonClick('÷')} className={opStyle}>÷</button>

        {/* Baris 2: 7, 8, 9, Kali */}
        <button onClick={() => handleButtonClick('7')} className={numStyle}>7</button>
        <button onClick={() => handleButtonClick('8')} className={numStyle}>8</button>
        <button onClick={() => handleButtonClick('9')} className={numStyle}>9</button>
        <button onClick={() => handleButtonClick('x')} className={opStyle}>×</button>

        {/* Baris 3: 4, 5, 6, Kurang */}
        <button onClick={() => handleButtonClick('4')} className={numStyle}>4</button>
        <button onClick={() => handleButtonClick('5')} className={numStyle}>5</button>
        <button onClick={() => handleButtonClick('6')} className={numStyle}>6</button>
        <button onClick={() => handleButtonClick('-')} className={opStyle}>-</button>

        {/* Baris 4: 1, 2, 3, Tambah */}
        <button onClick={() => handleButtonClick('1')} className={numStyle}>1</button>
        <button onClick={() => handleButtonClick('2')} className={numStyle}>2</button>
        <button onClick={() => handleButtonClick('3')} className={numStyle}>3</button>
        <button onClick={() => handleButtonClick('+')} className={opStyle}>+</button>

        {/* Baris 5: 0, Titik, Sama Dengan */}
        <button onClick={() => handleButtonClick('0')} className={`${numStyle} col-span-6 !aspect-auto h-14`}>0</button>
        <button onClick={() => handleButtonClick('.')} className={numStyle}>.</button>
        <button onClick={result} className={`${opStyle} bg-indigo-600 hover:bg-indigo-700`}>=</button>
        
      </div>
    </div>
  );
};

export default CalcKeypad;