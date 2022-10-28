import React from "react";
import axios from "axios";
import create from "zustand";
import produce from 'immer';

const sliceContent =(set)=>({
    content: {},
    fetchContent:async(url)=>{
        try{
            const {data} = await axios.get(`https://extract-news.p.rapidapi.com/v0/article`,{
                headers: {
                    'X-RapidAPI-Key': 'c35a97763bmsh751a1761d6c2319p18ac6djsn34936216f8e2',
                    'X-RapidAPI-Host': 'extract-news.p.rapidapi.com'
              },
              params: {
                // url: 'https://www.nytimes.com/2022/10/24/world/europe/rishi-sunak-uk-prime-minister.html'
                url : url
              },
            });
            set (
                {content: data.article}

                )
        }
        catch(err){
            console.log(err);
        }       

    },
});

const useContentStore = create(sliceContent);
export const fetchContent = (state) => state.content;

export default useContentStore;
