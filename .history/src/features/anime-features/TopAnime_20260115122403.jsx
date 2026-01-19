import React from 'react'
import { useLoaderData } from 'react-router-dom'

const TopAnime = () => {

  const topAnime = useLoaderData()
    
  return (
    <div>
      {top}
    </div>
  )
}

export default TopAnime