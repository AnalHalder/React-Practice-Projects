import React, { useState } from 'react';
import { useNews } from '../contexts/NewsContext';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const { fetchNews } = useNews();

  function addQuery(query) {
    fetchNews(query);
  }

  function handleSearch(e) {
    e.preventDefault();
    addQuery(searchQuery);
    setSearchQuery("");
  }

  return (
    <div className='flex z-10 min-w-full justify-around bg-blue-50 p-3 fixed'>
      <h1
        onClick={() => { addQuery("India") }}
        className='text-fuchsia-700 hover:text-fuchsia-900 text-xl font-bold cursor-pointer'>
        Daily Updates
      </h1>
      
      <div className='flex gap-x-10 cursor-pointer'>
        <a
          onClick={() => { addQuery("cricket") }}
          className='text-violet-700 text-lg hover:text-violet-900 font-semibold'>
          Cricket
        </a>

        <a
          onClick={() => { addQuery("finance") }}
          className='text-violet-700 text-lg hover:text-violet-900 font-semibold'>
          Finance
        </a>

        <a
          onClick={() => { addQuery("technology") }}
          className='text-violet-700 text-lg hover:text-violet-900 font-semibold'>
          Technology
        </a>
      </div>

      <form className='flex gap-x-5' onSubmit={handleSearch}>
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          type="text"
          className='rounded-lg text-violet-600 font-semibold w-80 p-1 hover:bg-sky-200 bg-sky-100 outline-none'
          placeholder='2024 T20 World Cup' />

        <button
          type="submit"
          className='rounded-md bg-blue-600 hover:bg-blue-800 text-white min-w-12 text-lg p-1'>
          Search
        </button>
      </form>
    </div>
  );
}

export default Navbar;
