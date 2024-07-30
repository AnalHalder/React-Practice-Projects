import React from 'react';

function Card({ article }) {
  return (
    <div className='w-96 p-4 cursor-pointer' onClick={()=>window.open(article.url, '_blank')} >
      <img src={article.urlToImage} alt={article.title} className='w-80 h-56' />
      <h1 className='text-xl font-bold mb-2'>{article.title}</h1>
      <h3 className='font-semibold'>{article.description}</h3>
      <h2 className='font-semibold'>{article.publishedAt}</h2>
    </div>
  );
}

export default Card;
