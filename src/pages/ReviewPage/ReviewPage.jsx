import PropTypes from 'prop-types';
import { getMovieReview } from 'services/api';
import Review from 'components/Review';
import { Error, Container } from './ReviewPage.styled';
import { useEffect, useState } from 'react';
import { startLoader, stopLoader } from 'components/Loader';

const ReviewPage = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    getMovieReview(movieId)
      .then(response => {
        setReviews(response.results);
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
    <Container>
      {status === 'pending' && startLoader()}
      {status === 'resolved' && reviews.length > 0 && (
        <Review items={reviews} />
      )}
      {reviews.length === 0 && (
        <Error>We don't have any review for this movie</Error>
      )}
      {status === 'rejected' && (
        <Error>Ups...💩 Something went wrong. Please try again later.</Error>
      )}
    </Container>
  );
};

export default ReviewPage;

ReviewPage.propTypes = {
  movieId: PropTypes.string,
};
