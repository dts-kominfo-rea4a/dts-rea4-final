import React from "react";
import axios from "axios";
import create from "zustand";
import produce from 'immer';

const sliceNews =(set)=>({
    news: [],
    keyword: "",
    setKeyword: (value) => {
        set({ keyword: value });
      },
    fetchNews:async()=>{
        try{
            const {data} = await axios.get(`https://newsx.p.rapidapi.com/search`,{
                headers: {
                'X-RapidAPI-Key': '98e0325be9mshbc00fa3bbea457ap1a0c46jsn9bd045faddbc',
                'X-RapidAPI-Host': 'newsx.p.rapidapi.com'
              },
              params: {limit: '8', skip: '0'},
            });
            set (
                {news: data}

                )
        }
        catch(err){
            console.log(err);
        }       

    },
    // filterNews: (str, listNews) => {
    //     if (str !== "") {
    //       let searchVal = str
    //         .replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&")
    //         .toUpperCase();
    //       let regex = new RegExp(searchVal, "g");
    //       let filterResult = listNews.filter((news) => {
    //         return news.title.toUpperCase().match(regex);
    //       });
    
    //       set({ news: filterResult });
    //     }
    //   },
});

const useNewsStore = create(sliceNews);

export const iniNews = (state) => state.news;
export const fetchNews = (state) => state.fetchNews;
export const iniKeyword = (state) => state.keyword;
export const setKeyword = (state) => state.setKeyword;
// export const setFilterNews = (state)=> state.filterNews;



export default useNewsStore;
