import React from 'react';
import { useCalcContext } from '../../hooks/useCalcContext';

const CalcDisplay = () => {
  const { display, prevDisplay } = useCalcContext();

  // untuk prev penjumlajan (besok)
  return (
    <div className="w-full">
      <div
        className="
          rounded-lg
          p-4
          min-h-20 md:min-h-32
          text-2xl md:text-4xl lg:text-5xl
          w-full
          text-end
          break-all 
          overflow-y-auto
          flex items-end justify-end
          text-slte
          bg-white
          cursor-default"
      >
        {prevDisplay.replaceAll('/', '÷').replaceAll('*', 'x') || '0'}
      </div>
      <div
        className="
          rounded-lg
          shadow-[0_0_10px_rgba(0,0,0,0.3)] 
          p-4
          min-h-20 md:min-h-32
          text-2xl md:text-4xl lg:text-5xl
          w-full
          text-end
          break-all 
          overflow-y-auto
          flex items-end justify-end
          bg-white
          cursor-default"
      >
        {display.replaceAll('/', '÷').replaceAll('*', 'x') || '0'}
      </div>
    </div>
  );
};

export default CalcDisplay;
