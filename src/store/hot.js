import React from "react";
import axios from "axios";
import create from "zustand";
import produce from 'immer';

const sliceHot =(set)=>({
    hots: [],
    fetchHot:async()=>{
        try{
            const {data} = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=eyUrYAGdhs5BmTAUsG76SLmXrr2vMY9E`,{
            //     headers: {
            //     'API-Key': 'eyUrYAGdhs5BmTAUsG76SLmXrr2vMY9E',
            //     // 'X-RapidAPI-Host': 'newsx.p.rapidapi.com'
            //   },
            //   params: {limit: '8', skip: '0'},
            });
            set (
                {hots: data.results[0]}

                )
        }
        catch(err){
            console.log(err);
        }       

    },
});

const useHotStore = create(sliceHot);
export const fetchHot = (state) => state.hots;

export default useHotStore;
