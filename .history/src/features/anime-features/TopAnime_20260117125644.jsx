import React from 'react'
import { useLoaderData } from 'react-router-dom'

const TopAnime = () => {

  const {populer} = useLoaderData()
    
  return (
    <div>
      {populer.map((item) => (
        <div key={item.mal_id}>
          <img src="" alt="" {} />
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default TopAnime