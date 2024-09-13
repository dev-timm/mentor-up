import { NavLink } from 'react-router-dom';
import heroImg from '../assets/hero-Img.png';
import arrowRight from '../assets/icons/arrow-right.svg';
import LeadingCompanies from '../components/LeadingCompanies';
import flexibleLearning from '../assets/illustrations/flexible-learning.svg';
import industryInsights from '../assets/illustrations/industry-insights.svg';
import personalizedGuidance from '../assets/illustrations/personalized-guidance.svg';
import hiwFindMentor from '../assets/how-it-works-find-mentor.png';
import hiwBecomeMentor from '../assets/how-it-works-become-mentor.png';

import { useState } from 'react';

const Landing = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      {/* HERO */}

      <section className="hero">
        <div className="container hero-content">
          <div className="text-container">
            <h1>
              Unlock Your <span>Potential</span> with Expert Mentorship
            </h1>
            <p>
              Connect with industry leaders and receive personalized guidance to
              achieve your goals.
            </p>
            <a href="/sign-up" className="btn-b1">
              Find your Mentor <img src={arrowRight} alt="right arrow icon" />
            </a>
          </div>
          <img src={heroImg} className="hero-img" alt="hero image" />
        </div>
      </section>
      <LeadingCompanies />

      {/* USPS */}

      <section className="usp-section container">
        <h2 className="center-text">Why Choose MentorUp</h2>
        <div className="usp-items">
          <div className="usp-item">
            <img src={personalizedGuidance} alt="personalized guidance" />
            <div className="usp-item-tex center-text">
              <h4>Personalized Guidance</h4>
              <p className="p2">
                Tailored advice from seasoned professionals who understand your
                goals.
              </p>
            </div>
          </div>
          <div className="usp-item">
            <img src={industryInsights} alt="industry insights" />
            <div className="usp-item-tex center-text">
              <h4>Industry Insights</h4>
              <p className="p2">
                Exclusive access to knowledge and trends from successful
                industry experts.
              </p>
            </div>
          </div>
          <div className="usp-item">
            <img src={flexibleLearning} alt="flexible learning" />
            <div className="usp-item-tex center-text">
              <h4>Flexible Learning</h4>
              <p className="p2">
                Convenient, on-demand sessions that fit your schedule.
              </p>
            </div>
          </div>
        </div>
        <NavLink to="/sign-up" className="btn-b1">
          Start Your Journey <img src={arrowRight} alt="right arrow icon" />
        </NavLink>
      </section>

      {/* HOW IT WORKS */}

      <section className="how-it-works container">
        <div className="hiw-header">
          <h2 className="center-text">How It Works</h2>
          <div className="hiw-tabs">
            <button
              className={
                toggleState === 1 ? 'p2 hiw-tab hiw-tab-active' : 'p2 hiw-tab'
              }
              onClick={() => toggleTab(1)}
            >
              Find a Mentor
            </button>
            <button
              className={
                toggleState === 2 ? 'p2 hiw-tab hiw-tab-active' : 'p2 hiw-tab'
              }
              onClick={() => toggleTab(2)}
            >
              Become a Mentor
            </button>
          </div>
        </div>
        <div
          className={
            toggleState === 1 ? 'hiw-content hiw-content-ative' : 'hiw-content'
          }
        >
          <div className="hiw-steps">
            <div className="hiw-step">
              <p className="hiw-step-number">1</p>
              <p className="hiw-step-text">
                <span className="hiw-step-heading">Create an Account</span>
                <br /> Sign up by providing your basic information, such as
                name, email, and password.
              </p>
            </div>
            <div className="hiw-step">
              <p className="hiw-step-number">2</p>
              <p className="hiw-step-text">
                <span className="hiw-step-heading">Choose a Mentor</span>
                <br /> Browse through our list of mentors, read their profiles,
                and select the one that best matches your needs.
              </p>
            </div>
            <div className="hiw-step">
              <p className="hiw-step-number">3</p>
              <p className="hiw-step-text">
                <span className="hiw-step-heading">Schedule a Session</span>
                <br /> Pick a date and time that works for you from your chosen
                mentor’s available slots.
              </p>
            </div>
            <div className="hiw-step">
              <p className="hiw-step-number">4</p>
              <p className="hiw-step-text">
                <span className="hiw-step-heading">Begin Your Journey</span>
                <br /> Attend your first session and start receiving
                personalized guidance to achieve your goals.
              </p>
            </div>
          </div>
          <img src={hiwFindMentor} alt="how it works mentor" />
        </div>

        <div
          className={
            toggleState === 2 ? 'hiw-content hiw-content-ative' : 'hiw-content'
          }
        >
          <div className="hiw-steps">
            <div className="hiw-step">
              <p className="hiw-step-number">1</p>
              <p className="hiw-step-text">
                <span className="hiw-step-heading">Create Your Profile</span>
                <br /> Sign up and fill in your details, including your
                expertise, experience, and mentoring preferences.
              </p>
            </div>
            <div className="hiw-step">
              <p className="hiw-step-number">2</p>
              <p className="hiw-step-text">
                <span className="hiw-step-heading">Set Your Availability</span>
                <br /> Choose your preferred mentoring schedule and the times
                that work best for you.
              </p>
            </div>
            <div className="hiw-step">
              <p className="hiw-step-number">3</p>
              <p className="hiw-step-text">
                <span className="hiw-step-heading">Connect with Mentees</span>
                <br /> Browse mentee requests or let mentees find you based on
                your profile and expertise.
              </p>
            </div>
            <div className="hiw-step">
              <p className="hiw-step-number">4</p>
              <p className="hiw-step-text">
                <span className="hiw-step-heading">Start Mentoring</span>
                <br /> Once connected, begin guiding your mentees through
                personalized sessions.
              </p>
            </div>
          </div>
          <img src={hiwBecomeMentor} alt="how it works mentor" />
        </div>
      </section>
    </>
  );
};
export default Landing;
