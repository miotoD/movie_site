"use client";

import React, { useEffect, useState } from "react";
import { useMovie } from "../context";
import Header from "../components/header";
import { Span } from "next/dist/trace";

function Page() {
  const { movieData } = useMovie();
  const [mdata, setMdata] = useState(null);

  useEffect(() => {
    setMdata(movieData);
  }, [movieData]);

  useEffect(() => {
    console.log("Movie data has changed!", mdata);
  }, [mdata]);

  return (
    <div className="h-screen w-screen bg-black flex flex-col">
      <Header />
      <div className="flex-grow w-full flex justify-center">
        <div className="bg-gray-950 w-full h-[720px] mt-32 grid grid-rows-7 grid-cols-4 px-3 gap-4">
          <section
            className="h-96 w-full col-span-4 flex justify-center items-center bg-cover bg-center"
            style={{
              backgroundImage: mdata ? `url(${mdata.Poster})` : "",
              backgroundColor: !mdata ? "red" : "transparent",
            }}
          >
            {!mdata && <p className="text-white">Movie Poster</p>}
          </section>

          <div className="text-3xl text-white font-bold row-start-5 col-start-1 col-span-4 px-4">
            <h1>{mdata ? <span>{mdata.Title}</span> : <p>Movie Name</p>}</h1>
            <h3 className="text-[11px] text-gray-400">
              {mdata ? <span>{mdata.Genre}</span> : <span>Movie Genre</span>}
            </h3>

            <h3 className="text-[11px] -mt-4 text-white font-normal">
              Duration:{" "}
              {mdata ? <span>{mdata.Runtime}</span> : <span> Duration </span>}
            </h3>

            <button className="bg-gray-800 p-2 rounded-lg text-[11px] -mt-4 text-white font-normal">
              IMDB:{" "}
              {mdata && mdata.Ratings ? (
                <span>{mdata.imdbRating}</span>
              ) : (
                <span>Ratings</span>
              )}
            </button>

            <span className="block mt-4 text-[11px] text-white font-medium">
              {mdata ? <span>{mdata.Plot}</span> : <p>Plot</p>}
            </span>
          </div>

          <button className="row-start-6 col-start-4 text-white bg-blue-700 h-11 rounded-md font-semibold">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
