import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // For parsing query params
import NavBar from "../components/NavBar";
import MapsComponentDriver from "../components/MapsComponentDriver";

const StudentInterface = () => {
  const [present, setPresent] = useState(true); // Default to present
  const [distanceFromHome, setDistanceFromHome] = useState("2.5 km"); // Example distance
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username"); // Get username from query params

  const waypoints = [
    { lat: 26.9124, lng: 75.7873 },
    { lat: 26.927766, lng: 75.793118 },
  ];

  useEffect(() => {
    // Fetch the attendance status and distance when the component mounts
    if (username) {
      fetch(`http://localhost:5000/student_attendance?username=${encodeURIComponent(username)}`)
        .then((response) => response.json())
        .then((data) => {
          // Update attendance and distance from home
          setPresent(data.attendence_status === 0); // 0 means present, 1 means absent
          setDistanceFromHome(data.distanceFromHome); // Example, replace with actual distance if provided
        })
        .catch((error) => {
          console.error("Error fetching student data:", error);
        });
    }
  }, [username]);

  const toggleAttendance = () => {
    // Toggle attendance status and send to backend
    const newStatus = !present ? 0 : 1; // Inverse the current status
    fetch(`http://localhost:5000/update_attendance?username=${encodeURIComponent(username)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ attendence_status: newStatus }),
    })
      .then((response) => {
        if (response.ok) {
          setPresent(newStatus === 0); // Update attendance status locally
        }
      })
      .catch((error) => {
        console.error("Error updating attendance status:", error);
      });
  };

  return (
    <>
      <NavBar />
      <div className="student_interface">
        <div className="student_attendance_div">
          <div>Attendance Status</div>
          <div
            style={{
              color: present ? "green" : "red",
              backgroundColor: "#f0f0f0", // Neutral color background
              padding: "10px",
              borderRadius: "4px",
            }}
          >
            {present ? "Present" : "Absent"}
          </div>
          <button onClick={toggleAttendance}>Change Status</button>
          <div style={{ marginTop: "20px", fontSize: "18px" }}>
            Driver Distance from Home: <strong>{distanceFromHome}</strong>
          </div>
        </div>
        <div className="student_map_div">
          <h3>Driver Location</h3>
          <MapsComponentDriver
            apikey="UnbWgWcc8jTQ5mzvc7_Wv4DhHnKhqX4SEt7HtdpDUyw"
            waypoints={waypoints}
          />
        </div>
      </div>
    </>
  );
};

export default StudentInterface;
