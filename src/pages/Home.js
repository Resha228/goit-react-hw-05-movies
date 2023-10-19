import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FcClapperboard } from "react-icons/fc";

import { fetchData } from '../components/API';
import MoviesList from 'components/MoviesList';
import { TitleFilm, IconContainer, MainContainer } from 'styles/MoviesList.styled';
import Spinner from 'components/Spinner';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const way = '/trending/movie/day';
    // 'all/day' & 'movie/day' ?
    setTimeout(async () => {
      try {
        const { results } = await fetchData(way);
        setMovies([...results]);
      } catch (error) {
        console.error(error);
        toast.error('Error fetch data!');
      } finally {
        setLoading(false);
      }
    }, 300);
  }, []);

  return (
    <MainContainer>
      <TitleFilm>Trending movies today</TitleFilm>
      <IconContainer>
        <FcClapperboard style={{ width: '30px', height: '30px' }} />
      </IconContainer>
      {loading ? (
        <Spinner/>
      ) : (
        <ul>
          <MoviesList movies={movies} />
        </ul>
      )}
      <hr/>
    </MainContainer>
  );
};

export default Home;
