import { Route,Routes } from "react-router-dom";

import MovieList from "../pages/MovieList";
import MovieDetails from "../pages/MovieDetails";
import Search  from "../pages/Search";
import PageNotFound  from "../pages/PageNotFound";

export default function AllRoutes() {
  return (
    <Routes>

      <Route path="/" element={<MovieList searchType="All" />} />
      <Route path="/movies/popular" element={<MovieList searchType="popular" />} />
      <Route path="/movies/top" element={<MovieList searchType="top" />} />
      <Route path="/movies/upcoming" element={<MovieList searchType="upcoming" />} />

      <Route path="/movie/:id" element={<MovieDetails />} />
      
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<PageNotFound />} />


    </Routes>
  );
}