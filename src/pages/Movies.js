import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { BiSearch } from "react-icons/bi";
import { fetchData } from '../components/API';
import Spinner from 'components/Spinner';
import SearchMovies from 'components/SearchMovies';
import { SearchMoviesWraper, SearchForm, TitleForm, InputForm, IconWraper, FormWraper, ButtonSubmit } from 'styles/Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const currentSearch = query.get('search') ?? '';

  const onSubmitSearch = e => {
    e.preventDefault();
    const newSearch = e.target.elements.search.value;

    if (newSearch === '') {
      toast.error('Enter some text');
      return;
    }

    setQuery({ search: newSearch, _timestamp: Date.now() });

    e.target.elements.search.value = '';
  };

  useEffect(() => {
    if (currentSearch === '') {
      setMovies([]);
      return;
    }

    setLoading(true);

    toast.loading('Loading...', { duration: 300 });
    const querySearch = `&query=${currentSearch}`;
    const waySearch = '/search/movie';

    setTimeout(async () => {
      try {
        const { results } = await fetchData(waySearch, querySearch);
        if (results.length === 0) {
          toast('No movies');
          return;
        }
        toast.success(`Found ${results.length} movies!`);
        setMovies([...results]);
      } catch (error) {
        console.warn(error);
        toast.error('Oops! Something went wrong...');
      } finally {
        setLoading(false);
      }
    }, 500);
  }, [currentSearch]);

  return (
    <main>
      <>
        <TitleForm>Find movies:</TitleForm>
        <FormWraper>
          <SearchForm onSubmit={onSubmitSearch}>
            <IconWraper><BiSearch style={{ width: '24px', height: '24px', color: '#ad9d66' }}/></IconWraper>
            <InputForm
              type="text"
              name="search"
              autoFocus
              placeholder="enter a movie name"
            />
            <ButtonSubmit type="submit">search</ButtonSubmit>
          </SearchForm>
        </FormWraper>
        <hr />
        {movies.length > 0 && (
          <SearchMoviesWraper>
            {loading ? (
              <Spinner />
            ) : (
              <>
                <ul>
                  <SearchMovies movies={movies} />
                </ul>
              </>
            )}
          </SearchMoviesWraper>
        )}
      </>
    </main>
  );
};

export default Movies;
