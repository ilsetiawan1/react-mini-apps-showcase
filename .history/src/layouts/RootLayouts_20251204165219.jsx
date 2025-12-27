import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header'

const RootLayouts = () => {
  return (
    <div>
        <<nav className="flex">
            <Link to={'/'}/>
        </nav>>
        <div>
           <Outlet/>
        </div>
    </div>
  )
}

export default RootLayouts