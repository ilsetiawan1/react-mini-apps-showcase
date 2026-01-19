import React from 'react'
import { useLoaderData } from 'react-router-dom'

const TopAnime = () => {

  const topAnimes = useLoaderData()
    
  return (
    <div>
      {topAnimes.map}
    </div>
  )
}

export default TopAnime