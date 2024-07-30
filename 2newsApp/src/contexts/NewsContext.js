import { createContext, useContext } from "react";
export const NewsContext = createContext({
    newsList: [],
    fetchNews: (query) => { }
})

export const useNews = () => {
    return useContext(NewsContext);
}

export const NewsProvider = NewsContext.Provider;

