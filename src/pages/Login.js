import React, { useState } from 'react';
import { login } from '../Auth';
import { Link } from 'react-router-dom'
import './Login.css'
import { useNavigate } from "react-router-dom";


const Login = () => {


  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');
  const [success, setsucess] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(username, password);
      console.log('Login successful, token:', token);
      alert('Login successful');
      setusername('')
      setpassword('')
      setsucess('Successfully Logged In')
      navigate("/");
      seterror('')
    } catch (err) {
      console.log('Login Error', err)
      seterror('Logged In Failed')
      setsucess('')

    }
  }


  return (
    // <form onSubmit={handleSubmit}>
    //   <label>UserName</label>
    //   <input
    //     type='text'
    //     name='name'
    //     value={username}
    //     onChange={(e) => setusername(e.target.value)} />
    //   <br></br><br></br>
    //   <label>Password</label>
    //   <input
    //     type='password'
    //     name='password'
    //     value={password}
    //     onChange={(e) => setpassword(e.target.value)} />
    //   <br></br><br></br>
    //   <button type='submit'>Login</button>
    //   {success && <p style={{ color: "Green" }}>{success}</p>}
    //   {error && <p style={{ color: 'red' }}>{error}</p>}
    // </form>

    <form onSubmit={handleSubmit} className="login-form">
  <h2 className="login-title">Login</h2>

  <div className="input-group">
    <label>User Name</label>
    <input
      type="text"
      name="name"
      value={username}
      onChange={(e) => setusername(e.target.value)}
      placeholder="Enter username"
    />
  </div>

  <div className="input-group">
    <label>Password</label>
    <input
      type="password"
      name="password"
      value={password}
      onChange={(e) => setpassword(e.target.value)}
      placeholder="Enter password"
    />
  </div>

  <button type="submit"  className="login-btn">Login</button>

  {success && <p className="success">{success}</p>}
  {error && <p className="error">{error}</p>}
  <h6 className='mt-3 text-center'>Don't have an account?<Link to="/register" className='text-decoration-none text-danger ps-2' >Register</Link></h6>
  
</form>


  )
}
export default Login
