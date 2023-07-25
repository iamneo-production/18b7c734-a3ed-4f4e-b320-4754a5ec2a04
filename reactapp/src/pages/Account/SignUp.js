import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/register', {
        name: name,
        gmail: email,
        password: password,
        confirmPassword: confirmPassword,
      });

      if (response.status === 200) {
        navigate('/signin');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <div style={{ width: '350px', padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <center>
          <h1>Register Form</h1>
        </center>
        <br />
        <form style={{ width: '100%' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold', color: '#333' }}>Name:</label>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
            />
          </div>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold', color: '#333' }}>Email:</label>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
            />
          </div>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold', color: '#333' }}>Password:</label>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
            />
          </div>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold', color: '#333' }}>Confirm Password:</label>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
            />
          </div>
          {error && <p style={{ color: '#f44336', marginTop: '5px' }}>{error}</p>}

          <br />
          <button
            type="submit"
            onClick={handleSubmit}
            style={{ width: '100%', padding: '10px', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
          >
            Sign Up
          </button>
          <div style={{ marginTop: '15px', fontSize: '14px', color: '#555' }}>
            Already have an account? <Link to="/signin" style={{ color: '#2196f3', textDecoration: 'none' }}>Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
