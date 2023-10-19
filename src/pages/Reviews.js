import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchData } from 'components/API';

const Reviews = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const wayReviews = `/movie/${movieId}/reviews`;

    setTimeout(async () => {
      try {
        const { results } = await fetchData(wayReviews);
        if (results?.length === 0) {
          toast('Sorry, no reviews');
          return;
        }
        setDetails([...results]);
      } catch (error) {
        console.warn(error);
        toast.error('Oops! Something went wrong...');
      }
    }, 300);
  }, [movieId]);

  return (
    <section>
      {details === null ? (
        <p>
          No any reviews for this movie...
        </p>
      ) : (
        <ul>
          {details?.map(item => (
            <li key={item.id}>
              <p>
                Author: <b>{item.author} </b>
              </p>
              <span style={{ textDecoration: 'underline' }}>
                {item.created_at.slice(0, 10)}
              </span>
              <p>{item.content}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Reviews;