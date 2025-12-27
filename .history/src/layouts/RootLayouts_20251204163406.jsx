import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const RootLayouts = () => {
  return (
    <div>
        <div className="flex">
            <Link to={'/'}/>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default RootLayouts