import styles from '../styles/Navbar.module.css';
import appStyles from '../styles/App.module.css';
import btnStyles from '../styles/Button.module.css';

import { NavLink } from 'react-router-dom';
import { navLinks } from '../data';

import logo from '../assets/logo.svg';
import mobileMenu from '../assets/icons/burger-menu.svg';
import { useRef, useState, useEffect } from 'react';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const menuRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowLinks(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const handleLinkClick = () => {
    setShowLinks(false);
  };

  return (
    <nav>
      <div className={appStyles.container}>
        <div className={styles.navContainer}>
          <div className={styles.navMain}>
            <NavLink to="/">
              <img src={logo} className={styles.logo} alt="logo" />
            </NavLink>
            <button className={`${styles.navToggle}`} onClick={toggleLinks}>
              <img src={mobileMenu} alt="mobile menu icon" />
            </button>
          </div>
          <div
            ref={menuRef}
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
                    onClick={handleLinkClick}
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
                onClick={handleLinkClick}
              >
                Sign In
              </NavLink>
              <NavLink
                to="/sign-up"
                className={btnStyles.btnPrimaryMedium}
                onClick={handleLinkClick}
              >
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
