import { NavLink } from 'react-router-dom';
import heroImg from '../assets/hero-Img.png';
import arrowRight from '../assets/icons/arrow-right.svg';
import LeadingCompanies from '../components/LeadingCompanies';
import flexibleLearning from '../assets/illustrations/flexible-learning.svg';
import industryInsights from '../assets/illustrations/industry-insights.svg';
import personalizedGuidance from '../assets/illustrations/personalized-guidance.svg';

const Landing = () => {
  return (
    <>
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
    </>
  );
};
export default Landing;
