import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="container">
      <div className="nav-container">
        <div className="nav-main">
          <NavLink to="/">
            <img src={logo} className="logo" />
          </NavLink>
          <div className="nav-links">
            <NavLink to="/find-mentor" className="nav-link">
              Find Mentor
            </NavLink>
            <NavLink to="/become-mentor" className="nav-link">
              Become Mentor
            </NavLink>
          </div>
        </div>
        <div className="nav-action">
          <NavLink to="/sign-in" className="nav-link">
            Sign In
          </NavLink>
          <NavLink to="/sign-up" className="btn-b2">
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
