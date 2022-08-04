import { Error } from './NotFound.styled';

const NotFound = () => {
  return (
    <div>
      <Error>
        Page not found...
        <br /> The page you are looking for doesn't exist
      </Error>
      <img src="./lostpage.jpg" alt="page not found" width="600" />
    </div>
  );
};

export default NotFound;
