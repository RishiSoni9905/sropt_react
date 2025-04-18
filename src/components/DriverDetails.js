import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const DriverDetails = () => {
  const [drivers, setDrivers] = useState([]);
  const [visiblePasswordIndex, setVisiblePasswordIndex] = useState(null);

  
  useEffect(() => {
    fetch("http://localhost:5000/drivers")
      .then((response) => response.json())
      .then((data) => setDrivers(data))
      .catch((error) => {
        console.error("Error fetching drivers:", error);
      });
  }, []);

  
  const togglePasswordVisibility = (index) => {
    setVisiblePasswordIndex(visiblePasswordIndex === index ? null : index);
  };

  
  const removeDriver = (driver_id) => {
    fetch(`http://localhost:5000/remove_driver?driver_id=${driver_id}`, {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          alert(`Driver with ID ${driver_id} removed successfully.`);
          
          setDrivers(drivers.filter((driver) => driver.id !== driver_id));
        } else {
          alert(`Failed to remove driver with ID ${driver_id}.`);
        }
      })
      .catch((error) => {
        alert("An error occurred while removing the driver.");
        console.error("Error:", error);
      });
  };

  return (
    <div className="driver-details-container">
      <table className="driver-details-table">
        <thead>
          <tr>
            <th>Driver Name</th>
            <th>Driver Id</th>
            <th>Vehicle No</th>
            <th>Contact No</th>
            <th>School ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver, index) => (
            <tr key={driver.id}>
              <td>{driver.driver_name}</td>
              <td>{driver.id}</td>
              <td>{driver.vehicle_no}</td>
              <td>{driver.contact_no}</td>
              <td>{driver.school_id}</td>
              <td>{driver.username}</td>
              <td>
                {visiblePasswordIndex === index ? driver.password : "********"}
                <button
                  onClick={() => togglePasswordVisibility(index)}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "black",
                  }}
                >
                  {visiblePasswordIndex === index ? <FaEyeSlash /> : <FaEye />}
                </button>
              </td>
              <td>
                <button
                  onClick={() => removeDriver(driver.id)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriverDetails;
