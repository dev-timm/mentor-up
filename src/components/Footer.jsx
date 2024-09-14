import iconFacebook from '../assets/icons/icon-facebook.svg';
import iconInstagram from '../assets/icons/icon-instagram.svg';
import iconTiktok from '../assets/icons/icon-tiktok.svg';
import iconYoutube from '../assets/icons/icon-youtube.svg';

const Footer = () => {
  return (
    <footer className="footer-content container">
      <p className="p3">© 2024 MyMentor</p>
      <div className="footer-icons">
        <a href="https://www.instagram.com/">
          <img src={iconInstagram} alt="instagram icon" />
        </a>
        <a href="https://www.tiktok.com/en/">
          <img src={iconTiktok} alt="tiktok icon" />
        </a>
        <a href="https://www.facebook.com/">
          <img src={iconFacebook} alt="facebook icon" />
        </a>
        <a href="https://www.youtube.com/">
          <img src={iconYoutube} alt="youtube icon" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
