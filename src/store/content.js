import React from "react";
import axios from "axios";
import create from "zustand";
import produce from 'immer';

const sliceContent =(set)=>({
    contents: [],
    fetchContent:async()=>{
        try{
            const {data} = await axios.get(`https://extract-news.p.rapidapi.com/v0/article`,{
                headers: {
                    'X-RapidAPI-Key': 'c35a97763bmsh751a1761d6c2319p18ac6djsn34936216f8e2',
                    'X-RapidAPI-Host': 'extract-news.p.rapidapi.com'
              },
              params: {
                url: 'https://www.nytimes.com/2022/10/24/world/europe/rishi-sunak-uk-prime-minister.html'
              },
            });
            set (
                {contents: data}

                )
        }
        catch(err){
            console.log(err);
        }       

    },
});

const useNewsStore = create(sliceNews);
export const fetchNews = (state) => state.news;

export default useNewsStore;
