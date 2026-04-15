import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to MERN Auth</h1>
        <p>Secure authentication with sessions</p>
        {user ? (
          <div>
            <p>Hello, {user.email}!</p>
            <Link to="/profile" className="btn">Go to Profile</Link>
          </div>
        ) : (
          <div className="auth-links">
            <Link to="/login" className="btn">Login</Link>
            <Link to="/register" className="btn">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;