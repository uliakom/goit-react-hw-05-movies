import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import {
  Container,
  ImageWrap,
  Image,
  InfoWrap,
  Title,
  Raiting,
  Description,
  OtherInfo,
  StyledNavLink,
} from './MovieDetails.styled';

const MovieDetails = ({ info }) => {
  const {
    original_title,
    genres,
    overview,
    poster_path,
    popularity,
    vote_average,
  } = info;
  const imageBaseUrl = `https://image.tmdb.org/t/p/w500`;
  const movieGanres = genres.map(genre => genre.name);

  return (
    <Container>
      <ImageWrap>
        <Image src={imageBaseUrl + poster_path} alt={original_title} />
      </ImageWrap>

      <InfoWrap>
        <Title>{original_title}</Title>
        <p>{movieGanres.join(' , ')}</p>
        <Raiting>
          <p>👁 {Math.round(popularity)}</p>
          <p>⭐️{vote_average}</p>
        </Raiting>
        <Description>{overview}</Description>

        <OtherInfo>
          <li>
            <StyledNavLink to="cast">CAST</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="review">REVIEW</StyledNavLink>
          </li>
        </OtherInfo>
      </InfoWrap>
      <Outlet />
    </Container>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  info: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    popularity: PropTypes.number.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
