import React, { useState, useEffect } from 'react';
import News from './components/News';
import Navbar from './components/Navbar'
import { NewsProvider } from './contexts/NewsContext';

const API_KEY = "5576ff27115d4ce09ce25af54369c7a4";
const url = "https://newsapi.org/v2/everything?q=";

function App() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetchNews('India');
  }, []);

  const  fetchNews = async (query) => {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    console.log(data);
    addNews(data.articles);
  }

  function addNews(articles) {
    const validArticles = articles.filter(article => article.urlToImage);
    setNewsList(validArticles);
  }

  return (
    <NewsProvider value={{newsList,fetchNews}}>
      <Navbar/>
      <News/>
    </NewsProvider>
  );
}

export default App;
