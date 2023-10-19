import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { toast } from 'react-hot-toast';
import { fetchData } from 'components/API';
import Spinner from 'components/Spinner';
import {
  ButtonBack,
  DetailsImg,
  DetailsTitle,
  SectionAdd,
  DetailsWrapper,
  Section,
  DetailsLink,
  LinkAdd,
} from 'styles/MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState(null);
  const location = useLocation();
  const backLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const wayDetails = `/movie/${movieId}`;

    setTimeout(async () => {
      try {
        const movieInfo = await fetchData(wayDetails);
        setInfo(movieInfo);
      } catch (error) {
        console.warn(error);
        toast.error('Oops! Something went wrong...');
      }
    }, 300);
  }, [movieId]);

  if (info === null) {
    return <Spinner />;
  }

  const {
    title,
    original_title,
    poster_path,
    budget,
    genres,
    homepage,
    release_date,
    vote_average,
    overview,
  } = info;

  const poster = poster_path && `http://image.tmdb.org/t/p/w342${poster_path}`;
  const release = release_date && release_date.slice(0, 4);
  const rating = vote_average && Math.round(vote_average * 10);
  const tags =
    genres &&
    genres.map(tag => (
      <li key={tag.id}>
        <p>{tag.name}</p>
      </li>
    ));

  return (
    <>
      {info && (
        <main>
          <Link
            to={backLocationRef.current}
            style={{ width: '20px', display: 'block' }}
          >
            <ButtonBack>
              <HiArrowLeft
                style={{
                  width: '20px',
                  height: '20px',
                  color: '#010c1f',
                  marginRight: 'auto',
                }}
              />
            </ButtonBack>
          </Link>
          <Section>
            <DetailsImg src={poster} alt={original_title} width="240" />
            <DetailsWrapper>
              <DetailsTitle>
                {title} ({release})
              </DetailsTitle>
              {budget ? (
                <p>
                  The budget($): <b>{budget}</b>
                </p>
              ) : null}
              <p>
                User Score: <b>{rating}%</b>
              </p>
              <DetailsTitle>Overview</DetailsTitle>
              <p>{overview} </p>
              <DetailsTitle>Genres</DetailsTitle>
              <ul>{tags}</ul>
              {homepage && (
                <div>
                  <DetailsTitle>Homepage: </DetailsTitle>
                  <DetailsLink href={homepage} target="_blank" rel="noreferrer">
                    {homepage}
                  </DetailsLink>
                </div>
              )}
            </DetailsWrapper>
          </Section>
          <hr />
          <SectionAdd>
            <h5>Additional information</h5>
            <ul>
              <li>
                <LinkAdd to={'cast'}>Cast</LinkAdd>
              </li>
              <li>
                <LinkAdd to={'reviews'}>Reviews</LinkAdd>
              </li>
            </ul>
          </SectionAdd>
          <hr />
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </main>
      )}
    </>
  );
};

export default MovieDetails;
