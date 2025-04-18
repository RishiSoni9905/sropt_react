import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios"; // Import axios for API requests

const AddDrivers = () => {
  const [formData, setFormData] = useState({
    driver_name: "",
    vehicle_no: "",
    contact_no: "",
    school_id: "",
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null); // Message state for success or error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to backend API
      const response = await axios.post("http://localhost:5000/add_driver", formData, {
        withCredentials: true, // Send cookies with request for session management
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error adding driver");
    }
  };

  const generateRandomString = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const generateUsernameAndPassword = () => {
    const randomUsername = generateRandomString(8);
    const randomPassword = generateRandomString(10);
    setFormData({
      ...formData,
      username: randomUsername,
      password: randomPassword,
    });
  };

  return (
    <form className="add-drivers-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Driver Name:</label>
        <input
          type="text"
          name="driver_name"
          value={formData.driver_name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Vehicle Number:</label>
        <input
          type="text"
          name="vehicle_no"
          value={formData.vehicle_no}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Contact Number:</label>
        <input
          type="text"
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
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group password-field">
        <label>Password:</label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <span className="password-icon" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </span>
      </div>

      <button type="button" className="generate-btn" onClick={generateUsernameAndPassword}>
        Generate Username & Password
      </button>

      <button type="submit" className="submit-btn">Add Driver</button>

      {/* Display success or error message */}
      {message && <p>{message}</p>}
    </form>
  );
};

export default AddDrivers;
