import { Routes, Route } from 'react-router-dom';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesDetails } from 'services/api';
import MovieDetails from 'components/MovieDetails';
import ReviewPage from 'pages/ReviewPage';
import CastPage from 'pages/CastPage';
import { Container, Error } from './MoviePage.styled';
import { startLoader, stopLoader } from 'components/Loader';

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setStatus('pending');
    getMoviesDetails(id)
      .then(response => {
        setMovie(response.data);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        console.log(error);
      })
      .finally(() => {
        stopLoader();
      });
  }, [id]);

  const onGoBackClick = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <Container>
      {status === 'pending' && startLoader()}
      {status === 'resolved' && (
        <>
          <button type="button" onClick={onGoBackClick}>
            GO BACK
          </button>
          <MovieDetails info={movie} />
        </>
      )}
      {status === 'rejected' && (
        <Error>Ups...💩 Something went wrong. Please try again later.</Error>
      )}
      <Routes>
        <Route path="review" element={<ReviewPage movieId={id} />} />
        <Route path="cast" element={<CastPage movieId={id} />} />
      </Routes>
    </Container>
  );
};

export default MoviePage;
