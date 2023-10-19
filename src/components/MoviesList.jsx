import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FilmCard, FilmList, FilmPoster } from '../styles/MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  if (movies.length === 0) {
    return <p>The list of popular films is missing</p>;
  }

  return (
    <FilmList>
      {movies.map(({ id, poster_path, original_title, title }) => (
        <li key={id}>
          <FilmCard>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <FilmPoster
                src={
                  poster_path &&
                  `https://image.tmdb.org/t/p/w500${poster_path}`
                }
                alt={original_title}
                width="150"
              />
              {title && title.trim()} 
            </Link>
          </FilmCard>
        </li>
      ))}
    </FilmList>
  );
};

export default MoviesList;
