import styles from '../styles/Navbar.module.css';
import appStyles from '../styles/App.module.css';
import btnStyles from '../styles/Button.module.css';

import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav>
      <div className={appStyles.container}>
        <div className={styles.navContainer}>
          <div className={styles.navMain}>
            <NavLink to="/">
              <img src={logo} className={styles.logo} alt="logo" />
            </NavLink>
            <div className={styles.navLinks}>
              <NavLink to="/find-mentor" className={styles.navLink}>
                Find Mentor
              </NavLink>
              <NavLink to="/become-mentor" className={styles.navLink}>
                Become Mentor
              </NavLink>
            </div>
          </div>
          <div className={styles.navAction}>
            <NavLink to="/sign-in" className={styles.navLink}>
              Sign In
            </NavLink>
            <NavLink to="/sign-up" className={btnStyles.btnPrimaryMedium}>
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
