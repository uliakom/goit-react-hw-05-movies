import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList';
import { Title, Error } from './Home.styled';
import { getTrendingMovies } from 'services/api';
import { startLoader, stopLoader } from 'components/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    getTrendingMovies()
      .then(response => {
        setMovies(response.results);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        console.log(error);
      })
      .finally(() => {
        stopLoader();
      });
  }, []);

  return (
    <main>
      <div>
        <Title>
          Trending today<span>🔥</span>
        </Title>
        {status === 'pending' && startLoader()}
        {status === 'resolved' && <MovieList movies={movies} />}
        {status === 'rejected' && (
          <Error>Ups...💩 Something went wrong. Please try again later.</Error>
        )}
      </div>
    </main>
  );
};

export default Home;
