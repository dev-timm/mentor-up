import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { menteeList } from '../data';

import styles from '../styles/BecomeMentor.module.css';
import appStyles from '../styles/App.module.css';
import btnStyles from '../styles/Button.module.css';

import chevronRight from '../assets/icons/chevron-right.svg';
import chevronLeft from '../assets/icons/chevron-left.svg';
import arrowRight from '../assets/icons/arrow-right.svg';
import heroImg from '../assets/become-mentor-hero.png';
import checklistCheck from '../assets/icons/checklist-check.svg';

const BecomeMentor = () => {
  const [mentees, setMentees] = useState(menteeList);
  const [currentMentee, setCurrentMentee] = useState(0);

  const prevSLide = () => {
    setCurrentMentee((oldMentee) => {
      const result = (oldMentee - 1 + mentees.length) % mentees.length;
      return result;
    });
  };
  const nextSLide = () => {
    setCurrentMentee((oldMentee) => {
      const result = (oldMentee + 1) % mentees.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSLide();
    }, 10000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentMentee]);

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

      {/* MEET OUR MENTEES */}

      <section className={styles.meetMentees}>
        <div className={appStyles.container}>
          <h2 className={appStyles.centerText}>Meet Our Mentees</h2>
          <div className={styles.menteeContainer}>
            {mentees.map((mentee, menteeIndex) => {
              const { id, name, mentorship, background, reason, image } =
                mentee;
              return (
                <article
                  className={styles.menteeSlide}
                  style={{
                    transform: `translateX(${
                      100 * (menteeIndex - currentMentee)
                    }%)`,
                    opacity: menteeIndex === currentMentee ? 1 : 0,
                    visibility:
                      menteeIndex === currentMentee ? 'visible' : 'hidden',
                  }}
                  key={id}
                >
                  <img src={image} alt="mentee image" />
                  <div className={styles.menteeDetails}>
                    <div className={styles.menteeText}>
                      <h5>Name</h5>
                      <p className={appStyles.p2}>{name}</p>
                    </div>
                    <div className={styles.menteeText}>
                      <h5>Mentorship Focus</h5>
                      <p className={appStyles.p2}>{mentorship}</p>
                    </div>
                    <div className={styles.menteeText}>
                      <h5>Background</h5>
                      <p className={appStyles.p2}>{background}</p>
                    </div>
                    <div className={styles.menteeText}>
                      <h5>Why She Chose MentorUp</h5>
                      <p className={appStyles.p2}>{reason}</p>
                    </div>
                  </div>
                </article>
              );
            })}
            <button
              type="button"
              className={`${btnStyles.iconBtnMedium} ${styles.prev}`}
              onClick={prevSLide}
            >
              <img src={chevronLeft} alt="button" />
            </button>
            <button
              type="button"
              className={`${btnStyles.iconBtnMedium} ${styles.next}`}
              onClick={nextSLide}
            >
              <img src={chevronRight} alt="button" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default BecomeMentor;
