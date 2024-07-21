import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const query = useQuery().get('query');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (query) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}&page=${page}`)
        .then(response => {
          setMovies(response.data.results);
          setTotalPages(response.data.total_pages);
        })
        .catch(error => console.error('Error searching movies:', error));
    }
  }, [query, page]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <MovieList movies={movies} />
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default SearchPage;
