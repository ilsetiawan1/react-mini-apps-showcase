import React from 'react';
import { useCalcContext } from '../../hooks/useCalcContext';

const CalcDisplay = () => {
  const { display, prevDisplay } = useCalcContext();

  return (
    <div className="w-full rounded-lg shadow-lg p-4 bg-white flex flex-col items-end min-h-32">
      {/* Baris Atas: Preview Soal (Kecil & Pudar) */}
      <div className="text-sm md:text-xl text-slate-400 break-all h-8">
        {prevDisplay.replaceAll('/', '÷').replaceAll('*', 'x')}
        {prevDisplay && ' ='}
      </div>

      <div className="text-3xl md:text-5xl font-bold text-slate-800 break-all mt-auto">{display.replaceAll('/', '÷').replaceAll('*', 'x') || '0'}</div>
    </div>
  );
};

export default CalcDisplay;
