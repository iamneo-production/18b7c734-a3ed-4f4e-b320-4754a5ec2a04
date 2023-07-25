import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './api';

const FeedForm = () => {
  const [formdata, setFormdata] = useState({
    email: '',
    name: '',
    subject: '',
    message: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addFeedback(formdata);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '350px', padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center' }}>FEEDBACK</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            id='email'
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
          />
          <input
            type="name"
            placeholder="Name"
            id='name'
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
          />
          <input
            type="name"
            placeholder="Subject"
            id='subject'
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
          />
          <input
            type="name"
            placeholder="Message"
            id='message'
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
          />
          <button type='submit' style={{ width: '100%', padding: '10px', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FeedForm;
