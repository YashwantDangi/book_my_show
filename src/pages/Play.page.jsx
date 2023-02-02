import axios from "axios";
import React, { useEffect, useState } from "react";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import PosterSliderTv from "../components/PosterSlider/PosterSliderTv.Component";
import DefaultLayoutHoc from "../layout/Default.layout";

const PlayPage = () => {
  const [popularShows, setPopularShows] = useState([]);
  const [topRatedShows, setTopRatedShows] = useState([]);
  const [airingShows, setAiringShows] = useState([]);

  useEffect(() => {
    const requestPopularShows = async () => {
      const getPopularShows = await axios.get(`/tv/popular`);
      setPopularShows(getPopularShows.data.results);
    };
    requestPopularShows();
  }, []);

  useEffect(() => {
    const requestTopRatedShows = async () => {
      const getTopRatedShows = await axios.get(`/tv/top_rated`);
      setTopRatedShows(getTopRatedShows.data.results);
    };
    requestTopRatedShows();
  });

  useEffect(() => {
    const requestAiringShows = async () => {
      const getAiringShows = await axios.get(`/tv/airing_today`);
      setAiringShows(getAiringShows.data.results);
    };
    requestAiringShows();
  });

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="my-12 container px-4 lg:ml-20 lg:w-2/1">
        {/* Top Rated Shows */}
        <div className="container mx-auto px-4 md:px-12 my-8">
          <PosterSliderTv
            config={settings}
            title="Top-Rated Shows"
            posters={topRatedShows}
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* Today Airing Shows */}
        <div className="container mx-auto px-4 md:px-12 my-8">
          <PosterSliderTv
            config={settings}
            title="Today Airing Shows"
            posters={airingShows}
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* popular Shows */}
        <div className="container mx-auto px-4 md:px-12 my-8">
          <PosterSliderTv
            title="Popular Shows"
            subtitle=""
            posters={popularShows}
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);
