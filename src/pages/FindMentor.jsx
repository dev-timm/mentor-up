import styles from '../styles/FindMentor.module.css';
import appStyles from '../styles/App.module.css';
import btnStyles from '../styles/Button.module.css';

import heroImg from '../assets/find-mentor-hero.png';
import arrowRight from '../assets/icons/arrow-right.svg';
import chevronRight from '../assets/icons/chevron-right.svg';
import chevronLeft from '../assets/icons/chevron-left.svg';
import LeadingCompanies from '../components/LeadingCompanies';

import { topCategories } from '../data';
import { NavLink } from 'react-router-dom';

import { mentorList } from '../data';
import { useEffect, useState } from 'react';

import { customerQuestions } from '../data';
import Questions from '../components/Questions';

const FindMentor = () => {
  const [mentors, setMentors] = useState(mentorList);
  const [currentMentor, setCurrentMentor] = useState(0);
  const [questions, setQuestions] = useState(customerQuestions);

  const prevSLide = () => {
    setCurrentMentor((oldMentor) => {
      const result = (oldMentor - 1 + mentors.length) % mentors.length;
      return result;
    });
  };
  const nextSLide = () => {
    setCurrentMentor((oldMentor) => {
      const result = (oldMentor + 1) % mentors.length;
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
  }, [currentMentor]);

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

      {/* MEET OUR MENTORS */}

      <section className={styles.meetMentors}>
        <div className={appStyles.container}>
          <h2 className={appStyles.centerText}>Meet Our Mentors</h2>
          <div className={styles.mentorContainer}>
            {mentors.map((mentor, mentorIndex) => {
              const { id, name, position, experience, reason, image } = mentor;
              return (
                <article
                  className={styles.mentorSlide}
                  style={{
                    transform: `translateX(${
                      100 * (mentorIndex - currentMentor)
                    }%)`,
                    opacity: mentorIndex === currentMentor ? 1 : 0,
                    visibility:
                      mentorIndex === currentMentor ? 'visible' : 'hidden',
                  }}
                  key={id}
                >
                  <img src={image} alt="mentor image" />
                  <div className={styles.mentorDetails}>
                    <div className={styles.mentorText}>
                      <h5>Name</h5>
                      <p className={appStyles.p2}>{name}</p>
                    </div>
                    <div className={styles.mentorText}>
                      <h5>Position</h5>
                      <p className={appStyles.p2}>{position}</p>
                    </div>
                    <div className={styles.mentorText}>
                      <h5>Experience</h5>
                      <p className={appStyles.p2}>{experience}</p>
                    </div>
                    <div className={styles.mentorText}>
                      <h5>Why Become a Mentor</h5>
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

      <Questions questions={questions} />
    </>
  );
};
export default FindMentor;
