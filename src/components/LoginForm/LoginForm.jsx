import React from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import './LoginForm.css';

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>
          <span className="virtual">Virtual</span>
          <span className="trainr">TrainR</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" id="username" name="username" placeholder="Username" required/>
            <FaUser className='icon'/>
          </div>

          <div className="input-group">
            <input
              type="password" id="password" name="password" placeholder="Password" required/>
              <FaLock className='icon'/>
          </div>

          <div className="input-group">
            <button type="submit" className="btn">Login</button>
          </div>

          <div className="footer-links">
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
