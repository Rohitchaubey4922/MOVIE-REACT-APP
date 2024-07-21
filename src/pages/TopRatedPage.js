import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`)
      .then(response => {
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch(error => console.error('Error fetching top-rated movies:', error));
  }, [page]);

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <MovieList movies={movies} />
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default TopRatedPage;
