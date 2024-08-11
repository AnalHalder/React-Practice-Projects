import React, { createContext, useEffect, useState } from 'react'
import { Client, Databases } from "appwrite";

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
    const [allBlogs, setallBlogs] = useState([])
    const [post, setPost] = useState([])
    const [startIdx, setStartIdx] = useState(0);
    const [endIdx, setEndIdx] = useState(6);
    const [idx, setIdx] = useState(0);
    const fetchBlogs = () => {
        const client = new Client()
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('66b4bcd00033c81cbf3e');

        const databases = new Databases(client);
        let promise = databases.listDocuments(
            "66b4c13700160f82c9f6",
            "66b4c15a003b367785c6",
            []
        );
        promise.then(
            function (response) {
                setallBlogs(response.documents);
                console.log(response);
            }, function (error) {
                console.log(error);
            });
    }
    const modifyDate = (s) => {
        let date = "";
        let idx = s.indexOf('T');
        date += s.substring(0, idx) + ", ";
        date += s.substring(idx + 1, s.indexOf('.' || '') - 3)
        return date;
    }
    useEffect(() => {
        fetchBlogs();
    }, [])


    const contextValue = {
        allBlogs, fetchBlogs,
        post, setPost,
        idx, setIdx,
        modifyDate,
        startIdx, setStartIdx,
        endIdx, setEndIdx,
    }
    return (
        <BlogContext.Provider value={contextValue}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider;