import React from 'react';

const CalcKeypad = () => {

    const {display}

  return (
    <div className="rounded-lg p-4 shadow-[0_0_10px_rgba(0,0,0,0.3)] w-full">
      <div className='flex gap-4'>
        <button className="h-10 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">1</button>
        <button className="h-10 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">+</button>
        <button className="h-10 w-10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">3</button>
      </div>
    </div>
  );
};

export default CalcKeypad;
