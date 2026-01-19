import React from 'react'
import { useLoaderData } from 'react-router-dom'

const TopAnime = () => {

  const getTopAnime = useLoaderData()
    
  return (
    <div>
      {getTopAnime.map((item, index) => (
        <div></div>
      ))}
    </div>
  )
}

export default TopAnime