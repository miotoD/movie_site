"use client";

import { useState } from "react";
import Header from "./components/header";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMovie } from "./context";

export default function Home() {
  let [movieName, setMovieName] = useState("");
  const { setMovieData } = useMovie(); // access setMovieData from context

  let baseUrl = `http://www.omdbapi.com/?t=${movieName}&apikey=2ed15137`; // base url

  let router = useRouter();

  function handleSearch() {
    axios.get(baseUrl).then((resp) => {
      console.log(resp.data);
      setMovieData(resp.data);
      setMovieName("");
      router.push("/movieDetail");
    });
  }

  return (
    <>
      <div
        className="relative h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <Header />

        <div className=" w-full h-96 mt-24 relative z-10 grid grid-rows-5 grid-cols-5">
          <h1 className=" text-white font-bold text-3xl col-start-2 col-span-3 row-start-2 lg:text-5xl">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-white text-md col-start-2 col-span-4 row-start-3 mt-8 font-semibold lg:col-start-3">
            Starts at USD 2.99. Cancel anytime.
          </p>

          <p className="text-white text-sm mt-8 col-start-3 col-span-3 row-start-4 font-semibold lg:text-2xl lg:-ml-28 lg:-mt-2  lg:col-start-3">
            Ready to watch? Enter the movie title to get started.
          </p>

          <input
            type="text"
            value={movieName}
            onChange={(event) => setMovieName(event.target.value)}
            placeholder="Enter Moviename"
            className=" row-start-5 h-12 col-start-2 w-56 font-bold rounded-lg p-2 lg:col-start-3 lg:w-72 lg:bg-gray-800 text-white"
          />

          <button
            className=" bg-red-500 text-white h-7 rounded-md w-20 row-start-5 col-start-5  -ml-4 lg:col-start-4 lg:ml-7 lg:h-12 hover:bg-red-600 "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}
