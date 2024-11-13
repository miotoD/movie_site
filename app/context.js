"use client";
import React, { useContext, createContext, useState } from "react";

//create the movie context
const MovieContext = createContext();

function Movieprovider({ children }) {
  const [movieData, setMovieData] = useState(null);
  return (
    <MovieContext.Provider value={{ movieData, setMovieData }}>
      {children}
    </MovieContext.Provider>
  );
}

export default Movieprovider;

export function useMovie() {
  return useContext(MovieContext);
}
