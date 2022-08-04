import PropTypes from 'prop-types';
import { getMovieCredits } from 'services/api';
import Cast from 'components/Cast';
import { Error } from 'pages/ReviewPage/ReviewPage.styled';
import { useEffect, useState } from 'react';
import { startLoader, stopLoader } from 'components/Loader';

const CastPage = ({ movieId }) => {
  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    getMovieCredits(movieId)
      .then(response => {
        setActors(response.cast);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        console.log(error);
      })
      .finally(() => {
        stopLoader();
      });
  }, [movieId]);

  return (
    <div>
      {status === 'pending' && startLoader()}
      {status === 'resolved' && actors.length > 0 && <Cast items={actors} />}
      {actors.length === 0 && (
        <Error>We don't have any information about cast of this movie</Error>
      )}
      {status === 'rejected' && (
        <p>Ups...💩 Something went wrong. Please try again later.</p>
      )}
    </div>
  );
};

export default CastPage;

CastPage.propTypes = {
  movieId: PropTypes.string,
};
