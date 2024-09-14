import styles from '../styles/Error.module.css';
import appStyles from '../styles/App.module.css';
import btnStyles from '../styles/Button.module.css';

import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../assets/illustrations/404.svg';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className={`${styles.errorPage} ${appStyles.container}`}>
        <div className={styles.errorContent}>
          <img src={errorImage} alt="404 image" />
          <h2>Oops! Page Not Found</h2>
          <p className={`${appStyles.p2} ${appStyles.centerText}`}>
            It looks like the page you're searching for doesn’t exist or may
            have been moved. Let’s get you back on track!
          </p>
          <Link to="/" className={btnStyles.btnPrimaryLarge}>
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
