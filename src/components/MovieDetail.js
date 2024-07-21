import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MovieDetail.css'; // Import the CSS file

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
      .then(response => setMovie(response.data))
      .catch(error => console.error('Error fetching movie details:', error));

    axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
      .then(response => setCast(response.data.cast))
      .catch(error => console.error('Error fetching movie cast:', error));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <div className="movie-header">
        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p className="movie-rating">Rating: {movie.vote_average}</p>
          <p className="movie-release-date">Release Date: {movie.release_date}</p>
        </div>
      </div>
      <div className="movie-overview">
        <h3>Overview</h3>
        <p>{movie.overview}</p>
      </div>
      <div className="movie-cast">
        <h3>Cast</h3>
        <div className="cast-list">
          {cast.map(member => (
            <div className="cast-member" key={member.cast_id}>
              <img src={`https://image.tmdb.org/t/p/w185${member.profile_path}`} alt={member.name} />
              <p>{member.name}</p>
              <p><small>{member.character}</small></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
