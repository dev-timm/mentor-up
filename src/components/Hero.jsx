import heroImg from '../assets/hero-Img.png';
import arrowRight from '../assets/icons/arrow-right.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="text-container">
        <h1>
          Unlock Your <span>Potential</span> with Expert Mentorship
        </h1>
        <p>
          Connect with industry leaders and receive personalized guidance to
          achieve your goals.
        </p>
        <button className="btn-b1">
          Find your Mentor <img src={arrowRight} alt="right arrow icon" />
        </button>
      </div>
      <img src={heroImg} className="hero-img" alt="hero image" />
    </section>
  );
};
export default Hero;
