import React from 'react';
import CalcDisplay from './CalcDisplay';
import CalcKeypad from './CalcKeypad';

const CalculatorApp = () => {
  return (
    <section className="w-full">
      <h1 className="text-2xl font-bold text-center py-4">Calc App</h1>
      <div className="flex-col flex justify-center items-center w-full shadow-[0_0_10px_rgba(0,0,0,0.3)] p-6 rounde">
        <CalcDisplay />
        <CalcKeypad />
      </div>
    </section>
  );
};

export default CalculatorApp;
