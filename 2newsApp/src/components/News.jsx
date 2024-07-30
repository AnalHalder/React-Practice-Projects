import React from 'react'
import Card from './Card'
import { useNews } from '../contexts/NewsContext'
function News() {
  const {newsList}=useNews()
  return (
    <div className='p-4'>
      <div className="flex flex-wrap justify-around p-2">
        {newsList.map((article, index) => (
          <Card key={index} article={article} />
        ))}
      </div>
    </div>
  )
}

export default News