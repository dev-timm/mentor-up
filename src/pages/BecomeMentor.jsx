import styles from '../styles/BecomeMentor.module.css';
import appStyles from '../styles/App.module.css';
import btnStyles from '../styles/Button.module.css';

import heroImg from '../assets/become-mentor-hero.png';
import arrowRight from '../assets/icons/arrow-right.svg';
import { NavLink } from 'react-router-dom';

const BecomeMentor = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={`${appStyles.container} ${styles.heroContent}`}>
          <img src={heroImg} className={styles.heroImg} alt="hero image" />
          <div className={styles.heroInfo}>
            <div className={styles.textContainer}>
              <h1>
                Share Your <span>Expertise:</span> Become a Mentor Today
              </h1>
              <p className={appStyles.p1}>
                Empower others by guiding them toward success while growing your
                own network.
              </p>
            </div>
            <NavLink to="/sign-up" className={btnStyles.btnPrimaryLarge}>
              Find your Mentor <img src={arrowRight} alt="right arrow icon" />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
export default BecomeMentor;
