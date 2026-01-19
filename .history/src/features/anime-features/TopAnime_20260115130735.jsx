import React from 'react'
import { useLoaderData } from 'react-router-dom'

const TopAnime = () => {

  const {populer} = useLoaderData()
    
  return (
    <div>
      {populer.map((item, index) => (
        <div>

        </div>
      ))}
    </div>
  )
}

export default TopAnime