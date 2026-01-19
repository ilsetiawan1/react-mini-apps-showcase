import React from 'react';
import { useCalcContext } from '../../hooks/useCalcContext';

const CalcKeypad = () => {
  const { handleButtonClick, deleteClick, result, clearAll } = useCalcContext();

  // TUGAS 1: Isi variabel di bawah ini dengan class Tailwind

  // 1. Fondasi semua tombol (grid, bentuk, flexbox, animasi klik)
  const btnBase = 'col-span-3  shadow-[0_0_10px_rgba(0,0,0,0.3)]';

  // 2. Seragam warna angka (biasanya warna cerah/putih)
  const numColor = `${btnBase} `;

  // 3. Seragam warna operator (biasanya warna mencolok/oranye)
  const opColor = `${btnBase} bg-slate-200`;

  // 4. Seragam warna aksi (AC/DEL - biasanya warna abu-abu)
  const actionColor = `${btnBase} `;

  // 5. Khusus tombol lebar (0 dan AC) - ingat: batalkan aspect-square!
  const wideBtn = ' ';

  return (
    <div className="w-full mt-6">
      <div className="grid grid-cols-12 gap-3">
        {/* TUGAS 2: Pasangkan variabel di atas ke dalam attribute className di bawah */}

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
        <button onClick={() => handleButtonClick('0')} className={`${numColor} colspan`}>
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
