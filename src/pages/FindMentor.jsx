import styles from '../styles/FindMentor.module.css';
import appStyles from '../styles/App.module.css';
import btnStyles from '../styles/Button.module.css';

import heroImg from '../assets/find-mentor-hero.png';
import arrowRight from '../assets/icons/arrow-right.svg';
import LeadingCompanies from '../components/LeadingCompanies';

import { topCategories } from '../data';
import { NavLink } from 'react-router-dom';

const FindMentor = () => {
  return (
    <>
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
      <LeadingCompanies />
      <section className={`${styles.topCategories} ${appStyles.container}`}>
        <h2 className={appStyles.centerText}>Our Top Mentorship Categories</h2>
        <div className={styles.categories}>
          {topCategories.map((category) => {
            const { id, name, image } = category;
            return (
              <div className={styles.category} key={id}>
                <img src={image} alt="category image" />
                <p className={appStyles.p3}>{name}</p>
              </div>
            );
          })}
        </div>
        <NavLink to="/sign-up" className={btnStyles.btnPrimaryLarge}>
          Start Your Journey
        </NavLink>
      </section>
    </>
  );
};
export default FindMentor;
