import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header'

const RootLayouts = () => {
  return (
    <div className='min-h-screen px-4 lg:px-48'>
        <Header/>
        <main>
           <Outlet/>
        </main>
    </div>
  )
}

export default RootLayouts