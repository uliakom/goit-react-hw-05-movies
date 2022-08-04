import PropTypes from 'prop-types';
import { MovieContainer } from './MovieList.styled';
import MovieItem from 'components/MovieListItem/MovieListItem';

const MovieList = ({ movies }) => {
  return (
    <MovieContainer>
      {movies.map(({ id, title, poster_path, vote_average }) => {
        return (
          <MovieItem
            key={id}
            id={id}
            src={poster_path}
            title={title}
            vote={vote_average}
          >
            {title}
          </MovieItem>
        );
      })}
    </MovieContainer>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
    }).isRequired
  ),
};
