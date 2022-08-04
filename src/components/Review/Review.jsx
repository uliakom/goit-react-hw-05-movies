import PropTypes from 'prop-types';
import {
  Container,
  ReviewList,
  ReviewItem,
  Avatar,
  ReviewText,
  Author,
  Text,
} from './Review.styled';

const Review = ({ items }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <Container>
      <p>MOVIE REVIEWS ⭐️⭐️⭐️⭐️⭐️</p>
      <ReviewList>
        {items.map(({ id, author, author_details, content }) => {
          return (
            <ReviewItem key={id}>
              <Avatar>
                <img
                  src={
                    author_details.avatar_path &&
                    author_details.avatar_path.includes('gravatar')
                      ? author_details.avatar_path.substring(1)
                      : baseUrl + author_details.avatar_path &&
                        'https://bytes.ua/wp-content/uploads/2017/08/no-image.png'
                  }
                  alt="avatar"
                  width="80"
                />
              </Avatar>

              <ReviewText>
                <Author>{author}</Author>
                <Text>{content}</Text>
              </ReviewText>
            </ReviewItem>
          );
        })}
      </ReviewList>
    </Container>
  );
};

export default Review;

Review.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      author_details: PropTypes.shape({
        avatar_path: PropTypes.string,
      }),
      content: PropTypes.string,
    }).isRequired
  ),
};
