import React from 'react';
import {Search} from './Search';
import Category from './Category';
import { Outlet } from 'react-router-dom';

const CinemaTVApp = () => {
  return (
    <section className='relative'>
      <div className="flex justify-between items-center py-5">
        <h1 className="font-bold text-lg sm:text-2xl md:text-3xl px-2">Cinema TV</h1>
        <Search />
      </div>
        <Category />
      {/*  */}
      <div className='mt-4'>
        <Outlet />
      </div>
    </section>
  );
};

export default CinemaTVApp;
