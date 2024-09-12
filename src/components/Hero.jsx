import heroImg from '../assets/hero-Img.png';

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
      </div>
      <img src={heroImg} className="hero-img" alt="hero image" />
    </section>
  );
};
export default Hero;
