import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header'

const RootLayouts = () => {
  return (
    <div>
        <Header/>
        <main>
           <Outlet/>
        </main>
    </div>
  )
}

export default RootLayouts