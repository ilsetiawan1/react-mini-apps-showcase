import React, { act } from 'react';
import { useCalcContext } from '../../hooks/useCalcContext';

const CalcKeypad = () => {
  const { handleButtonClick, deleteClick, result, clearAll } = useCalcContext();

  const btnStyle = `col-span-3`
  const numStyle = `${btnStyle} bg-white`
  const opStyle = `${btnStyle} bg-orange-400`
  const actionStyle = `${btnStyle} bg-slate-200`

  return (
    <div className='w-full mt-6'>
      <div className='grid grid-cols-12 gap-4'>
        {/* Baris 1 */}
        <button onClick={clearAll} className={`${actionStyle} col-span-6`}>AC</button>
        <button onClick={deleteClick} className={`${actionStyle}`}>DEL</button>
        <button onClick={() => handleButtonClick('÷')} className={`${opStyle}`}>÷</button>

        {/* Baris 2 */}
        <button onClick={() => handleButtonClick('7')} className={`${numStyle}>7</button>
        <button onClick={() => handleButtonClick('8')} className={`${numStyle}>8</button>
        <button onClick={() => handleButtonClick('9')} className={`${numStyle}>9</button>
        <b onClick={() => handleButtonClick('x')}>×</b className={`${numStyle}utton>

        {/* Baris 3 */}
        <button onClick={() => handleButtonClick('4')} className={`${numStyle}>4</button>
        <button onClick={() => handleButtonClick('5')} className={`${numStyle}>5</button>
        <button onClick={() => handleButtonClick('6')} className={`${numStyle}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>

        {/* Baris 4 */}
        <button onClick={() => handleButtonClick('1')} className={`${numStyle}>1</button>
        <button onClick={() => handleButtonClick('2')} className={`${numStyle}>2</button>
        <button onClick={() => handleButtonClick('3')} className={`${numStyle}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>

        {/* Baris 5 */}
        <button onClick={() => handleButtonClick('0')} className={`${numStyle}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={result}>=</button>
      </div>
    </div>
  );
};

export default CalcKeypad;
