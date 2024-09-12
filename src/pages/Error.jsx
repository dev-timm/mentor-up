import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../assets/illustrations/404.svg';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="container error-page">
        <div className="error-content">
          <img src={errorImage} alt="404 image" />
          <h2>Oops! Page Not Found</h2>
          <p className="p2 center-text">
            It looks like the page you're searching for doesn’t exist or may
            have been moved. Let’s get you back on track!
          </p>
          <Link to="/" className="btn-b1">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h3>There was a problem!</h3>
    </div>
  );
};
export default Error;
