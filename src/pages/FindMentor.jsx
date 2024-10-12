import styles from '../styles/FindMentor.module.css';
import appStyles from '../styles/App.module.css';
import btnStyles from '../styles/Button.module.css';

import heroImg from '../assets/find-mentor-hero.png';
import arrowRight from '../assets/icons/arrow-right.svg';

import LeadingCompanies from '../components/LeadingCompanies';

import { topCategories } from '../data';
import { NavLink } from 'react-router-dom';

import { useState } from 'react';

import { customerQuestions } from '../data';
import Questions from '../components/Questions';
import UserCarousel from '../components/UserCarousel';

import { mentorList } from '../data';

const FindMentor = () => {
  const [questions, setQuestions] = useState(customerQuestions);
  const [users, setUsers] = useState(mentorList);

  return (
    <>
      {/* HERO */}

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
          <NavLink to="/sign-up" className={btnStyles.btnPrimaryLarge}>
            Start Your Search <img src={arrowRight} alt="right arrow icon" />
          </NavLink>
        </div>
      </section>
      <LeadingCompanies />

      {/* TOP MENTORSHIP CATEGORIES */}

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

      <UserCarousel users={users} />

      <Questions questions={questions} />
    </>
  );
};
export default FindMentor;
