import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header'

const RootLayouts = () => {
  return (
    <div className='min-h-screen'>
        <Header/>
        <main className=''>
           <Outlet/>
        </main>
    </div>
  )
}

export default RootLayouts