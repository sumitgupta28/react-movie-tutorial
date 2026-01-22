import { Route, Routes } from 'react-router-dom';

import MovieList from '../pages/MovieList';
import MovieDetails from '../pages/MovieDetails';
import Search from '../pages/Search';
import PageNotFound from '../pages/PageNotFound';

export default function AllRoutes() {
  return (
    <div className='dark:bg-neutral-primary-dark min-h-screen'>
      <Routes>
        <Route path='/' element={<MovieList searchType='now_playing' />} />
        <Route
          path='/movies/popular'
          element={<MovieList searchType='popular' />}
        />
        <Route
          path='/movies/top'
          element={<MovieList searchType='top_rated' />}
        />
        <Route
          path='/movies/upcoming'
          element={<MovieList searchType='upcoming' />}
        />

        <Route path='/movie/:id' element={<MovieDetails />} />

        <Route path='/search' element={<Search />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
