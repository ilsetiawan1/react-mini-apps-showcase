import React from 'react'
import CalcDisplay from './CalcDisplay';
import CalcKeypad from './CalcKeypad';

const CalculatorApp = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold text-center py-4">Calc App</h1>
      <CalcDisplay/>
      <CalcKeypad
    </section>
  );
}

export default CalculatorApp