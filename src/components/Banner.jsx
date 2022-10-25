import React, { useEffect } from "react";
import useTmdbStore, {
  selectFetchWeeklyTrending,
  selectWeeklyTrending,
} from "../stores/tmdb";
import Slider from "react-slick";

function Banner() {
  const fetchWeeklyTrending = useTmdbStore(selectFetchWeeklyTrending);
  const weeklyTrending = useTmdbStore(selectWeeklyTrending);
  const sliderSetting = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    fetchWeeklyTrending();
  }, [fetchWeeklyTrending]);

  return (
    <div className="min-h-[480px] max-w-[100vw]">
      <Slider {...sliderSetting}>
        {weeklyTrending?.map((trendingItem) => (
          <div
            key={trendingItem.id}
            className="relative min-h-[480px] w-full"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${trendingItem?.backdrop_path}`}
              alt={trendingItem.title ? trendingItem.title : trendingItem.name}
              className="absolute h-full max-h-[480px] w-full object-cover object-center"
            />
            <div className="absolute h-full w-full bg-gradient-to-t from-[#040C16]"></div>
            <div className="absolute h-full w-full bg-gradient-to-r from-secondary-100/10"></div>
            <div className="absolute left-0 h-full max-w-[640px] mx-12 flex flex-col justify-center items-start gap-4">
              <h1 className="text-5xl font-bold">{trendingItem.title ? trendingItem.title : trendingItem.name}</h1>
              <button className="bg-secondary-600/70 rounded px-8 py-3 text-sm">Detail</button>
              <p className="text-sm font-light">{trendingItem.overview}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
