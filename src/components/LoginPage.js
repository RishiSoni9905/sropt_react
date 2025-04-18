import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import '../styles/loginpage.css';

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    schoolName: '',
    address: '',
    contactNo: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = 'http://localhost:5000';
    
    if (isLogin) {
      // Handle login
      fetch(`${apiUrl}/login_school`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: formData.username, password: formData.password }),
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert('Login failed: ' + response.statusText);
          return null;
        }
      })
      .then((data) => {
        if (data) {
          sessionStorage.setItem('user', JSON.stringify(data.user));
          if (data.user.userType === 'admin') {
            navigate(`/school_admin_interface?username=${formData.username}`);
          } else {
            alert('Unauthorized user type');
          }
        }
      });
    } else {
      // Handle signup
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      fetch(`${apiUrl}/signup_school`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          schoolName: formData.schoolName,
          address: formData.address,
          contactNo: formData.contactNo,
          username: formData.username,
          password: formData.password,
        }),
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            throw new Error(data.message || "Error signing up");
          });
        }
      })
      .then((data) => {
        setNotification(data.message);
        toggleForm(); // Switch to login after successful signup
      })
      .catch((error) => {
        alert(error.message);
      });
    }
  };
  

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    setFormData({
      schoolName: '',
      address: '',
      contactNo: '',
      username: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <>
      {notification && <div className="notification">{notification}</div>}
      
      {/* Signup Form */}
      {!isLogin && (
        <div id="signup-container">
          <h1 id="signup-title">SignUp</h1>
          <form id="signup-form" onSubmit={handleSubmit}>
            <input
              id="school-name-input"
              className="form-input"
              type="text"
              name="schoolName"
              placeholder="School Name"
              value={formData.schoolName}
              onChange={handleChange}
              required
            />
            <input
              id="address-input"
              className="form-input"
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <input
              id="contact-input"
              className="form-input"
              type="tel"
              name="contactNo"
              placeholder="Contact No."
              value={formData.contactNo}
              onChange={handleChange}
              required
            />
            <input
              id="username-input-signup"
              className="form-input"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              id="password-input-signup"
              className="form-input"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              id="confirm-password-input"
              className="form-input"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <input id="signup-button" type="submit" value="Submit" />
          </form>
          <button id="toggle-login-signup" onClick={toggleForm}>
            Already have an account? Login
          </button>
        </div>
      )}

      {/* Login Form */}
      {isLogin && (
        <div id="login-container">
          <h1 id="login-title">Login</h1>
          <form id="login-form" onSubmit={handleSubmit}>
            <input
              id="username-input-login"
              className="form-input"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              id="password-input-login"
              className="form-input"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input id="login-button" type="submit" value="Submit" />
          </form>
          <button id="toggle-login-signup" onClick={toggleForm}>
            Don't have an account? Signup 
          </button>
        </div>
      )}
    </> 
  );
};
 
export default LoginPage;
