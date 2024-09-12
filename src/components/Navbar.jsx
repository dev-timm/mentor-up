import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="container">
      <div className="nav-container">
        <div className="nav-main">
          <img src={logo} className="logo" />
          <ul className="nav-links">
            <li className="nav-link">
              <a href="#">Find a Mentor</a>
            </li>
            <li className="nav-link">
              <a href="#">Become a Mentor</a>
            </li>
          </ul>
        </div>

        <ul className="nav-action">
          <li className="nav-link">
            <a href="#">Sign In</a>
          </li>
          <li className="btn-b2">
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
