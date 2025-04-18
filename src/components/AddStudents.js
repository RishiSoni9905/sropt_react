import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Import eye icons from react-icons
import PinLocationComponent from './PinLocationComponent'; // Adjust the path as needed
import axios from 'axios'; // To send the POST request

const AddStudents = () => {
  const [formData, setFormData] = useState({
    student_name: '',
    address: '',
    contact_no: '',
    school_id: '',
    driver_id: '',
    attendence_status: '0', // Default attendance status (0 = absent, 1 = present)
    username: '',
    password: '',
  });
  
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const [showPopup, setShowPopup] = useState(false); // State to show success popup

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Make POST request to backend to add student
    axios.post('http://localhost:5000/add_student', formData)
      .then(response => {
        console.log(response.data);
        // Show popup for 2 seconds after successful response
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 2000);
      })
      .catch(error => {
        console.error("There was an error adding the student!", error);
      });
  };

  const generateRandomString = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const generateCredentials = () => {
    const randomUsername = generateRandomString(8);
    const randomPassword = generateRandomString(12);
    setFormData({
      ...formData,
      username: randomUsername,
      password: randomPassword,
    });
  };

  return (
    <div className="add-students-container">
      {showPopup && (
        <div className="success-popup">Student Added Successfully!</div>
      )}
      <form method="POST" action="/add_students" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Student Name:</label>
          <input
            type="text"
            name="student_name"
            value={formData.student_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onClick={() => {
              const lastPin = formData.address.split(" ");
              if (lastPin.length === 2) {
                setFormData({ ...formData, address: `${lastPin[0]} ${lastPin[1]}` });
              }
            }}
            readOnly
            required
          />
        </div>

        <PinLocationComponent apikey="UnbWgWcc8jTQ5mzvc7_Wv4DhHnKhqX4SEt7HtdpDUyw" setAddress={(address) => setFormData({ ...formData, address })} />

        <div className="form-group">
          <label>Contact Number:</label>
          <input
            type="tel"
            name="contact_no"
            value={formData.contact_no}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>School ID:</label>
          <input
            type="number"
            name="school_id"
            value={formData.school_id}
            onChange={handleChange} 
            required
          />
        </div>

        <div className="form-group">
          <label>Driver ID:</label>
          <input
            type="number"
            name="driver_id"
            value={formData.driver_id}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'} // Show or hide password based on state
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />} {/* Use react-icons for eye */}
            </span>
          </div>
        </div>

        <button type="button" onClick={generateCredentials}>Generate Username and Password</button>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudents;
