import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header'

const RootLayouts = () => {
  return (
    <div className='min-h-screen'>
        <Header/>
        <main className='bg-slate-600'>
           <Outlet/>
        </main>
    </div>
  )
}

export default RootLayouts