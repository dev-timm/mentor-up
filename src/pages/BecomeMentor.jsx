import { NavLink } from 'react-router-dom';

import styles from '../styles/BecomeMentor.module.css';
import appStyles from '../styles/App.module.css';
import btnStyles from '../styles/Button.module.css';

import heroImg from '../assets/become-mentor-hero.png';
import arrowRight from '../assets/icons/arrow-right.svg';
import checklistCheck from '../assets/icons/checklist-check.svg';

const BecomeMentor = () => {
  return (
    <>
      {/* HERO */}

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

      {/* MENTOR CHECKLIST */}

      <section className={`${styles.mentorChecklist} ${appStyles.container}`}>
        <h2 className={appStyles.centerText}>
          Are You Ready to Become a Mentor?
        </h2>
        <div className={styles.checklistContainer}>
          <div className={styles.checklistItem}>
            <img src={checklistCheck} alt="checklist icon" />
            <p className={appStyles.p1}>
              Proven Expertise: Minimum of 5+ years of experience in your field
              or industry.
            </p>
          </div>
          <div className={styles.checklistItem}>
            <img src={checklistCheck} alt="checklist icon" />
            <p className={appStyles.p1}>
              Professional Achievements: A track record of success in your
              career or entrepreneurial ventures.
            </p>
          </div>
          <div className={styles.checklistItem}>
            <img src={checklistCheck} alt="checklist icon" />
            <p className={appStyles.p1}>
              Passion for Teaching: A desire to help others grow and achieve
              their goals.
            </p>
          </div>
          <div className={styles.checklistItem}>
            <img src={checklistCheck} alt="checklist icon" />
            <p className={appStyles.p1}>
              Commitment: Willingness to dedicate time to mentees and provide
              consistent support.
            </p>
          </div>
          <div className={styles.checklistItem}>
            <img src={checklistCheck} alt="checklist icon" />
            <p className={appStyles.p1}>
              Effective Communication Skills: Ability to provide clear,
              actionable guidance.
            </p>
          </div>
          <div className={styles.checklistItem}>
            <img src={checklistCheck} alt="checklist icon" />
            <p className={appStyles.p1}>
              Willingness to Share: Openness to discussing challenges,
              successes, and lessons learned.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default BecomeMentor;
