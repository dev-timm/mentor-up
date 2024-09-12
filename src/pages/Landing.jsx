import heroImg from '../assets/hero-Img.png';
import arrowRight from '../assets/icons/arrow-right.svg';
import LeadingCompanies from '../components/LeadingCompanies';
import Navbar from '../components/Navbar';

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
            <a href="#" className="btn-b1">
              Find your Mentor <img src={arrowRight} alt="right arrow icon" />
            </a>
          </div>
          <img src={heroImg} className="hero-img" alt="hero image" />
        </div>
      </section>
      <LeadingCompanies />
    </>
  );
};
export default Landing;
