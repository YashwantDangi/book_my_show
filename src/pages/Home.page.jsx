import React, { useEffect, useState } from "react";
import axios from "axios"; // To work with Api we will use axios

// Components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

// Layout Hoc
import DefaultLayoutHoc from "../layout/Default.layout";
import PosterSliderTv from "../components/PosterSlider/PosterSliderTv.Component";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [popularShows, setPopularShows] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  // Popular Movies For Recommended Movies
  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setRecommendedMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  // Top Rated Movies For Premier Movies
  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");

      setPremierMovies(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies();
  }, []);

  // Upcoming Movies For
  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setOnlineStreamEvents(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);

  useEffect(() => {
    const requestPopularShows = async () => {
      const getPopularShows = await axios.get("/tv/popular");
      setPopularShows(getPopularShows.data.results);
    };
    requestPopularShows();
  }, []);

  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of recommended movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              className="w-full h-full"
              alt="Rupay"
            />
          </div>
          <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
            <PosterSlider
              title="Premiers"
              subtitle="Brand new releases every Friday"
              posters={premierMovies}
              isDark={true}
            />
          </div>
        </div>
      </div>

      {/* Tv Shows */}
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSliderTv
          title="Tv Shows"
          subtitle="List of Tv Shows"
          posters={popularShows}
          isDark={false}
        />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
        <PosterSlider
          title="Online Streaming Events"
          // subtitle blank??
          subtitle=""
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
