import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList';
import {
  Container,
  Title,
  SearchForm,
  Button,
  Input,
  Error,
} from './Movies.styled';
import { BsSearch } from 'react-icons/bs';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { startLoader, stopLoader } from 'components/Loader';
import { getMoviesByName } from 'services/api';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('searchQuery') === null) {
      return;
    }
    const userQuery = searchParams.get('searchQuery');
    setStatus('pending');
    getMoviesByName(userQuery)
      .then(response => {
        if (response.results.length === 0) {
          Report.failure(
            'Search Failure',
            'There is no movie for your query. Please enter other query',
            'Ok'
          );
          return;
        }
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
  }, [searchParams, query]);

  const handleNameChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      Report.failure('Search Failure', 'Please enter seach query', 'Ok');
      return;
    }

    setSearchParams({ searchQuery: query });
    setQuery('');
  };

  return (
    <div>
      <Container>
        <Title>Search movie by name</Title>
        <SearchForm onSubmit={handleSubmit}>
          <Input
            type="text"
            autocomplete="off"
            placeholder="Enter your query"
            name="searchQuery"
            value={query}
            onChange={handleNameChange}
          />
          <Button type="submit">
            <BsSearch size={23} />
          </Button>
        </SearchForm>
      </Container>

      {status === 'pending' && startLoader()}
      {status === 'resolved' && <MovieList movies={movies} />}
      {status === 'rejected' && (
        <Error>Ups...💩 Something went wrong. Please try again later.</Error>
      )}
    </div>
  );
};

export default Movies;
