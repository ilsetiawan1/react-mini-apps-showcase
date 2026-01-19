import React from 'react'
import { useLoaderData } from 'react-router-dom'

const TopAnime = () => {

  const topAnimes = useLoaderData()
    
  return (
    <div>
      {top}
    </div>
  )
}

export default TopAnime