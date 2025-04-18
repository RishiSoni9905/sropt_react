import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/generallogin.css';

const GeneralLogin = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username,
      password,
    };
  
    
    const backendUrl = `http://localhost:5000${props.route}`;
  
    
    fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Login failed');
      })
      .then(data => {
        
        const userType = data.user.userType;
        sessionStorage.setItem('user', JSON.stringify({ username, userType }));
  
        
        if (userType === 'student') {
          navigate(`/student_interface?username=${encodeURIComponent(username)}`);
        } else if (userType === 'driver') {
          navigate(`/driver_interface?username=${encodeURIComponent(username)}`);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Login failed. Please check your credentials.');
      });
  };
  

  return (
    <div id="login-container">
      <h1 className="login-header">{props.pagetype} Login</h1>
      <form id="login-form" method="POST" action={props.route} onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username" className="input-label">Username:</label>
          <input
            type="text"
            id="username-input"
            className="input-field"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="input-label">Password:</label>
          <input
            type="password"
            id="password-input"
            className="input-field"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="submit-group">
          <input type="submit" value="Submit" id="submit-button" />
        </div>
      </form>
    </div>
  );
};

export default GeneralLogin;
