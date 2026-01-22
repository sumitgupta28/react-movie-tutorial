import Card from '../components/Card';
import { useEffect, useState } from 'react';

export default function MovieList({ searchType }) {
  const [movieList, setMovieList] = useState( [] );
  
  const API_KEY = '3bf3ab5fbeacc29ba761c7fc8323af88';

  const BASE_URL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    async function fetchMovies() {
      console.log('Fetching movies for type:', searchType);
      const response = await fetch(
        `${BASE_URL}/movie/${searchType}?api_key=${API_KEY}`
      );

      const data = await response.json();
      setMovieList(data.results);
    }
    fetchMovies();
  }, [searchType]);

  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap other:justify-evenly'>
          {movieList.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
