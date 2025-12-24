import React, { useState } from 'react';
import { register } from '../Auth';
import { useNavigate, Link } from 'react-router-dom';

import "./Home.css"


const Register = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');
  const [success, setsuccess] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, password);
      setsuccess('Registered Successfully');
      seterror('');
      navigate('/login');
    } catch (err) {
      console.log('Registration Error', err);
      seterror('Registration Failed');
      setsuccess('');
    }
  };


  return (
    <>
     


      <div className="register-container">
        <div className="register-card text-center">
          <h2 className='regtitle'>Create Account 📝</h2>
          <p className="regsubtitle">Register a new account</p>

          <div className='d-flex justify-content-center'>
          <form onSubmit={handleSubmit}>
            <label className='regsubtitle '>Username</label>
            <input
              type="text"
              className='form-control'
              value={username}
              onChange={(e) => setusername(e.target.value)}
              placeholder="Enter your username"
              required
            />


            <label className='regsubtitle mt-3'>Password</label>
            <input
              type="password"
              className='form-control'
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your password"
              required
            />

            
            <button type="submit" className='regbtn mt-3'>Register</button>


            {success && <p className="success">{success}</p>}
            {error && <p className="error">{error}</p>}
          </form>
          </div>

          <p className="login-text mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>


          {/* <Link to="/" className="home-link">← Back to Home</Link> */}
        </div>
      </div>
    </>
  );
};


export default Register;
