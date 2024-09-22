import styles from '../styles/Landing.module.css';
import appStyles from '../styles/App.module.css';
import formStyles from '../styles/Form.module.css';
import btnStyles from '../styles/Button.module.css';

import { NavLink } from 'react-router-dom';

import heroImg from '../assets/landing-hero.png';
import arrowRight from '../assets/icons/arrow-right.svg';
import LeadingCompanies from '../components/LeadingCompanies';
import flexibleLearning from '../assets/illustrations/flexible-learning.svg';
import industryInsights from '../assets/illustrations/industry-insights.svg';
import personalizedGuidance from '../assets/illustrations/personalized-guidance.svg';
import hiwFindMentor from '../assets/how-it-works-find-mentor.png';
import hiwBecomeMentor from '../assets/how-it-works-become-mentor.png';
import star from '../assets/icons/star.svg';
import user1 from '../assets/users/sebastian-jackson.png';
import user2 from '../assets/users/jane-smith.png';

import { useState } from 'react';

const Landing = () => {
  const [toggleState, setToggleState] = useState(1); // Manages which tab is active

  // Function to handle tab switching
  const toggleTab = (index) => {
    setToggleState(index); // Set active tab based on index
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('subscribed!');
  };

  return (
    <>
      {/* HERO */}

      <section className={styles.hero}>
        <div className={`${appStyles.container} ${styles.heroContent}`}>
          <div className={styles.textContainer}>
            <h1>
              Unlock Your <span>Potential</span> with Expert Mentorship
            </h1>
            <p>
              Connect with industry leaders and receive personalized guidance to
              achieve your goals.
            </p>

            <NavLink to="/sign-up" className={btnStyles.btnPrimaryLarge}>
              Find your Mentor <img src={arrowRight} alt="right arrow icon" />
            </NavLink>
          </div>
          <img src={heroImg} className={styles.heroImg} alt="hero image" />
        </div>
      </section>
      <LeadingCompanies />

      {/* WHY MENTORUP */}

      <section className={styles.sectionBg}>
        <div className={appStyles.container}>
          <div className={styles.uspSection}>
            <h2 className={appStyles.centerText}>Why Choose MentorUp</h2>
            <div className={styles.uspItems}>
              <div className={styles.uspItem}>
                <img src={personalizedGuidance} alt="personalized guidance" />
                <div
                  className={`${appStyles.centerText} ${styles.uspItemText}`}
                >
                  <h4>Personalized Guidance</h4>
                  <p className={appStyles.p2}>
                    Tailored advice from seasoned professionals who understand
                    your goals.
                  </p>
                </div>
              </div>
              <div className={styles.uspItem}>
                <img src={industryInsights} alt="industry insights" />
                <div
                  className={`${appStyles.centerText} ${styles.uspItemText}`}
                >
                  <h4>Industry Insights</h4>
                  <p className={appStyles.p2}>
                    Exclusive access to knowledge and trends from successful
                    industry experts.
                  </p>
                </div>
              </div>
              <div className={styles.uspItem}>
                <img src={flexibleLearning} alt="flexible learning" />
                <div
                  className={`${appStyles.centerText} ${styles.uspItemText}`}
                >
                  <h4>Flexible Learning</h4>
                  <p className={appStyles.p2}>
                    Convenient, on-demand sessions that fit your schedule.
                  </p>
                </div>
              </div>
            </div>
            <NavLink to="/sign-up" className={btnStyles.btnPrimaryLarge}>
              Start Your Journey <img src={arrowRight} alt="right arrow icon" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section className={`${styles.howItWorks} ${appStyles.container}`}>
        <div className={styles.hiwHeader}>
          <h2 className={appStyles.centerText}>How It Works</h2>
          <div className={styles.tabs}>
            <button
              className={
                toggleState === 1
                  ? `${styles.tab} ${styles.active}`
                  : `${styles.tab}`
              }
              onClick={() => toggleTab(1)}
            >
              Find a Mentor
            </button>
            <button
              className={
                toggleState === 2
                  ? `${styles.tab} ${styles.active}`
                  : `${styles.tab}`
              }
              onClick={() => toggleTab(2)}
            >
              Become a Mentor
            </button>
          </div>
        </div>
        <div
          className={
            toggleState === 1
              ? `${styles.tabContent} ${styles.tabContentActive}`
              : `${styles.tabContent}`
          }
        >
          <div className={styles.tabSteps}>
            <div className={styles.tabStep}>
              <p className={styles.tabStepNumber}>1</p>
              <p className={styles.tabStepText}>
                <span className={styles.tabStepHeading}>Create an Account</span>
                <br /> Sign up by providing your basic information, such as
                name, email, and password.
              </p>
            </div>
            <div className={styles.tabStep}>
              <p className={styles.tabStepNumber}>2</p>
              <p className={styles.tabStepText}>
                <span className={styles.tabStepHeading}>Choose a Mentor</span>
                <br /> Browse through our list of mentors, read their profiles,
                and select the one that best matches your needs.
              </p>
            </div>
            <div className={styles.tabStep}>
              <p className={styles.tabStepNumber}>3</p>
              <p className={styles.tabStepText}>
                <span className={styles.tabStepHeading}>
                  Schedule a Session
                </span>
                <br /> Pick a date and time that works for you from your chosen
                mentor’s available slots.
              </p>
            </div>
            <div className={styles.tabStep}>
              <p className={styles.tabStepNumber}>4</p>
              <p className={styles.tabStepText}>
                <span className={styles.tabStepHeading}>
                  Begin Your Journey
                </span>
                <br /> Attend your first session and start receiving
                personalized guidance to achieve your goals.
              </p>
            </div>
          </div>
          <img src={hiwFindMentor} alt="how it works mentor" />
        </div>

        <div
          className={
            toggleState === 2
              ? `${styles.tabContent} ${styles.tabContentActive}`
              : `${styles.tabContent}`
          }
        >
          <div className={styles.tabSteps}>
            <div className={styles.tabStep}>
              <p className={styles.tabStepNumber}>1</p>
              <p className={styles.tabStepText}>
                <span className={styles.tabStepHeading}>
                  Create Your Profile
                </span>
                <br /> Sign up and fill in your details, including your
                expertise, experience, and mentoring preferences.
              </p>
            </div>
            <div className={styles.tabStep}>
              <p className={styles.tabStepNumber}>2</p>
              <p className={styles.tabStepText}>
                <span className={styles.tabStepHeading}>
                  Set Your Availability
                </span>
                <br /> Choose your preferred mentoring schedule and the times
                that work best for you.
              </p>
            </div>
            <div className={styles.tabStep}>
              <p className={styles.tabStepNumber}>3</p>
              <p className={styles.tabStepText}>
                <span className={styles.tabStepHeading}>
                  Connect with Mentees
                </span>
                <br /> Browse mentee requests or let mentees find you based on
                your profile and expertise.
              </p>
            </div>
            <div className={styles.tabStep}>
              <p className={styles.tabStepNumber}>4</p>
              <p className={styles.tabStepText}>
                <span className={styles.tabStepHeading}>Start Mentoring</span>
                <br /> Once connected, begin guiding your mentees through
                personalized sessions.
              </p>
            </div>
          </div>
          <img src={hiwBecomeMentor} alt="how it works mentor" />
        </div>
      </section>

      {/* USER REVIEWS */}

      <section className={`${styles.userReviews} ${appStyles.container}`}>
        <h2 className={appStyles.centerText}>
          Real Experiences: <br />
          Hear from Our Mentees
        </h2>
        <div className={styles.reviewsContent}>
          <div className={styles.userReview}>
            <div className={styles.stars}>
              <img src={star} alt={star} />
              <img src={star} alt={star} />
              <img src={star} alt={star} />
              <img src={star} alt={star} />
              <img src={star} alt={star} />
            </div>
            <p className={appStyles.p2}>
              "The mentorship exceeded my expectations. My mentor provided
              actionable advice and valuable insights that boosted my confidence
              and career. Truly a game-changer!"
            </p>
            <div className={styles.reviewAuthor}>
              <img src={user1} alt="user" />
              <div className={styles.authorDetails}>
                <p className={styles.authorName}>Sebastian Jackson</p>
                <p className={styles.authorProfession}>Artist</p>
              </div>
            </div>
          </div>
          <div className={styles.dividerLine}></div>
          <div className={styles.userReview}>
            <div className={styles.stars}>
              <img src={star} alt={star} />
              <img src={star} alt={star} />
              <img src={star} alt={star} />
              <img src={star} alt={star} />
              <img src={star} alt={star} />
            </div>
            <p className={appStyles.p2}>
              "This mentorship program transformed my career. The guidance was
              spot-on, and I felt supported every step of the way. Highly
              recommend it to anyone seeking growth!"
            </p>
            <div className={styles.reviewAuthor}>
              <img src={user2} alt="user" />
              <div className={styles.authorDetails}>
                <p className={styles.authorName}>Jane L. Smith</p>
                <p className={styles.authorProfession}>Graphic Designer</p>
              </div>
            </div>
          </div>
        </div>
        <NavLink to="/sign-up" className={btnStyles.btnPrimaryLarge}>
          Sign Up Now <img src={arrowRight} alt="right arrow icon" />
        </NavLink>
      </section>

      {/* NEWSLETTER */}

      <section className={`${styles.newsletter} ${appStyles.container}`}>
        <h2 className={appStyles.centerText}>Join Our Newsletter</h2>
        <form className={styles.newsletterForm} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Email"
            onFocus={() => console.log('Input focused')}
          />
          <button type="submit" className={btnStyles.btnSecondaryMedium}>
            Subscribe Now
          </button>
        </form>
      </section>
    </>
  );
};
export default Landing;
