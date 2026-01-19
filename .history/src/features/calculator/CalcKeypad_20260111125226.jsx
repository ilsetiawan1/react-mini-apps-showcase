import React from 'react';
import { useCalcContext } from '../../hooks/useCalcContext';

const CalcKeypad = () => {
  const { handleButtonClick, deleteClick, result, clearAll } = useCalcContext();

  const btnStyle = `col-span-3`
  const numStyle = `${btnStyle} bg-white`
  const opStyle = `${btnStyle} bg-orange-400`
  const actionStyle = `${btnStyle}`

  return (
    <div className='w-full mt-6'>
      <div className='grid grid-cols-12 gap-4'>
        {/* Baris 1 */}
        <button onClick={clearAll} className={`${actionStyle}`}>AC</button>
        <button onClick={deleteClick}>DEL</button>
        <button onClick={() => handleButtonClick('÷')}>÷</button>

        {/* Baris 2 */}
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('x')}>×</button>

        {/* Baris 3 */}
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>

        {/* Baris 4 */}
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>

        {/* Baris 5 */}
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={result}>=</button>
      </div>
    </div>
  );
};

export default CalcKeypad;
