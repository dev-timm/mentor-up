import styles from '../styles/Navbar.module.css';
import appStyles from '../styles/App.module.css';
import btnStyles from '../styles/Button.module.css';

import { NavLink } from 'react-router-dom';
import { navLinks } from '../data';

import logo from '../assets/logo.svg';
import mobileMenu from '../assets/icons/burger-menu.svg';
import { useState } from 'react';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className={appStyles.container}>
        <div className={styles.navContainer}>
          <div className={styles.navMain}>
            <NavLink to="/">
              <img src={logo} className={styles.logo} alt="logo" />
            </NavLink>
            <button
              className={`${styles.navToggle} ${btnStyles.iconBtnSmallTransparent}`}
              onClick={toggleLinks}
            >
              <img src={mobileMenu} alt="mobile menu icon" />
            </button>
          </div>
          <div
            className={
              showLinks
                ? `${styles.linksContainer} ${styles.showContainer}`
                : `${styles.linksContainer}`
            }
          >
            <div className={styles.navLinks}>
              {navLinks.map((link) => {
                const { id, url, text } = link;
                return (
                  <NavLink
                    key={id}
                    to={url}
                    className={({ isActive }) =>
                      `${styles.navLink} ${isActive ? styles.active : ''}`
                    }
                  >
                    {text}
                  </NavLink>
                );
              })}
            </div>
            <div className={styles.navAction}>
              <NavLink
                to="/sign-in"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ''}`
                }
              >
                Sign In
              </NavLink>
              <NavLink to="/sign-up" className={btnStyles.btnPrimaryMedium}>
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
