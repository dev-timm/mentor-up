import styles from '../styles/FindMentor.module.css';
import appStyles from '../styles/App.module.css';
import btnStyles from '../styles/Button.module.css';

import heroImg from '../assets/find-mentor-hero.png';
import arrowRight from '../assets/icons/arrow-right.svg';

const FindMentor = () => {
  return (
    <section className={`${styles.hero}`}>
      <div className={`${appStyles.container} ${styles.heroContent}`}>
        <div className={styles.textContainer}>
          <h1 className={appStyles.centerText}>
            Find the Perfect Mentor to <br /> Accelerate <span>Success</span>
          </h1>
          <p className={`${appStyles.p1} ${appStyles.centerText}`}>
            Discover mentors with the expertise and insights to <br /> guide
            your personal and professional growth.
          </p>
        </div>
        <div className={styles.imgParent}>
          <img src={heroImg} className={styles.heroImg} alt="hero image" />
        </div>
        <a href="/sign-up" className={btnStyles.btnPrimaryLarge}>
          Find your Mentor <img src={arrowRight} alt="right arrow icon" />
        </a>
      </div>
    </section>
  );
};
export default FindMentor;
