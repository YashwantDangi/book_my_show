import React from "react";

const CastAndCrew = (props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32">
          <img
            src={`https://image.tmdb.org/t/p/original${props.image}`}
            alt="Cast_Profile_Image"
            className="w-full h-full rounded-full object-cover object-center"
          />
        </div>
        <h1 className="text-xl font-bold text-gray-800 text-center">
          {props.name}
        </h1>
        <h5 className="text-sm font-bold text-gray-500 text-center">
          as {props.role}
        </h5>
      </div>
    </>
  );
};

export default CastAndCrew;
