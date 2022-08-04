import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  Item,
  Image,
  Info,
  Title,
  Vote,
  StyledLink,
} from './MovieListItem.styled';

const MovieItem = ({ id, src, title, vote }) => {
  const imageBaseUrl = `https://image.tmdb.org/t/p/w500`;
  const movieLink = `/movies/${id}`;
  const location = useLocation();

  return (
    <StyledLink
      to={movieLink}
      state={{
        from: location.pathname + location.search,
      }}
    >
      <Item>
        <Image src={imageBaseUrl + src} alt={title} />
        <Info>
          <Title>{title.toUpperCase()}</Title>
          <Vote>⭐️{vote}</Vote>
        </Info>
      </Item>
    </StyledLink>
  );
};
export default MovieItem;

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};
