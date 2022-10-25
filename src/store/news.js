import React from "react";
import axios from "axios";
import create from "zustand";
import produce from 'immer';

const sliceNews =(set)=>({
    news: [],
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
});

const useNewsStore = create(sliceNews);
export const fetchNews = (state) => state.news;

export default useNewsStore;
