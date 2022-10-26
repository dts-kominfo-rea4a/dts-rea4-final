import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import {
  selectMovieNowPlaying,
  selectMoviePopular,
  selectMovieTopRated,
  selectMovieUpcoming,
} from "../stores/tmdb";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="grow">
        <Banner />
        <div className="pt=2 pb-8">
          <Row
            title="Popular"
            category="popular"
            selector={selectMoviePopular}
          />
          <Row
            title="Top Rated"
            category="top_rated"
            selector={selectMovieTopRated}
          />
          <Row
            title="Now Playing"
            category="now_playing"
            selector={selectMovieNowPlaying}
          />
          <Row
            title="Upcoming"
            category="upcoming"
            selector={selectMovieUpcoming}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
