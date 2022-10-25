import React, { useEffect } from 'react'
import useTmdbStore, { selectFetchWeeklyTrending, selectWeeklyTrending } from '../stores/tmdb'

function Banner() {
  const fetchWeeklyTrending = useTmdbStore(selectFetchWeeklyTrending);
  const weeklyTrending = useTmdbStore(selectWeeklyTrending);
  const trending = weeklyTrending[Math.floor(Math.random() * weeklyTrending.length)];

  useEffect(()=>{
    fetchWeeklyTrending();
  },[fetchWeeklyTrending])

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${trending?.backdrop_path}`} alt="" />
    </div>
  )
}

export default Banner