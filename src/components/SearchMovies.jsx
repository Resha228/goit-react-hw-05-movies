import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FilmPoster, FilmCard, FilmList } from 'styles/MoviesList.styled';

const SearchMovies = ({ movies }) => {
  const location = useLocation();

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
              {title}
            </Link>
          </FilmCard>
        </li>
      ))}
    </FilmList>
  );
};

export default SearchMovies;
