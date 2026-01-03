import React from 'react';
import CalcDisplay from './CalcDisplay';
import CalcKeypad from './CalcKeypad';

const CalculatorApp = () => {
  return (
    <section className='w-full px-6 md:px-16'>
      <h1 className="text-2xl font-bold text-center py-4">Calc App</h1>
      <div className="flex-col flex justify-center items-center w-full ">
        <CalcDisplay />
        <CalcKeypad />
      </div>
    </section>
  );
};

export default CalculatorApp;
