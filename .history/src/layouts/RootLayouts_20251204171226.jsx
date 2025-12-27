import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header'

const RootLayouts = () => {
  return (
    <div className=''>
        <Header/>
        <main>
           <Outlet/>
        </main>
    </div>
  )
}

export default RootLayouts