import React from "react";
import { Link } from "react-router-dom";

const PosterForTv = (props) => {
  return (
    <>
      <Link to={`/plays`}>
        <div className="flex flex-col items-start  text-center gap-2 px-1 md:px-3">
          <div className="h-40 md:h-80 ">
            <img
              src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
              alt="poster"
              className="w-full h-full rounded-md"
            />
          </div>
          <h3
            className={`text-sm font-bold ${
              props.isDark ? "text-white" : "text-gray-700"
            }`}
          >
            {props.name}
          </h3>
          <p
            className={`text-md font-bold ${
              props.isDark ? "text-white" : "text-gray-700"
            }`}
          >
            First Air Date:{props.first_air_date}
          </p>
        </div>
      </Link>
    </>
  );
};

export default PosterForTv;
