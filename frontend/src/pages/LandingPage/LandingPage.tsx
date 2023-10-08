import { Link } from "react-router-dom";

import "./LandingPage.css";

const LandingPage: React.FC = () => {
  return (
    <div className="LandingPage">
      <h1>Landing Page</h1>
      <nav className="Navbar">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </div>
  );
};

export default LandingPage;
