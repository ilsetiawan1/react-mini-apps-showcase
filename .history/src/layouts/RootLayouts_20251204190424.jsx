import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header'

const RootLayouts = () => {
  return (
    <div className='min-h-screen className='px-4''>
        <Header/>
        <main>
           <Outlet/>
        </main>
    </div>
  )
}

export default RootLayouts