import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // To get query params
import ListStudents from "../components/ListStudentsRouting";
import MapsComponentDriver from "../components/MapsComponentDriver";
import NavBar from "../components/NavBar";

const DriverInterface = () => {
  const [students, setStudents] = useState([]);
  const [waypoints, setWaypoints] = useState([]);
  const [searchParams] = useSearchParams(); // Get the query params
  const username = searchParams.get("username"); // Extract 'username' from query params

  // Fetch student and school data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the students associated with the driver using the username
        const studentResponse = await fetch(
          `http://localhost:5000/students_for_drivers?username=${encodeURIComponent(username)}`, 
          { credentials: "include" }
        );
        const studentData = await studentResponse.json();
        setStudents(studentData);
  
        // Extract waypoints from student addresses
        const studentWaypoints = studentData.map(student => {
          const [lat, lng] = student.address.split(" ").map(Number);
          return { lat, lng };
        });
  
        // Fetch the school address using the driver's username
        const schoolResponse = await fetch("http://localhost:5000/get_school", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ username }) // Pass driver's username here
        });
  
        if (schoolResponse.ok) {
          const schoolData = await schoolResponse.json();
          const [schoolLat, schoolLng] = schoolData.address.split(" ").map(Number);
  
          // Update waypoints with school address
          setWaypoints([...studentWaypoints, { lat: schoolLat, lng: schoolLng }]);
        } else {
          console.error("Failed to fetch school data.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    if (username) {
      fetchData(); // Only fetch data if the username is present
    }
  }, [username]);
  

  return (
    <>
      <NavBar />
      <div className="driver_div">
        <div className="driver_list_div">
          <h3 style={{ marginTop: "30px", marginBottom: "20px", fontSize: "30px" }}>
            List of Students
          </h3>
          <ListStudents students={students.map(student => student.student_name)} />
        </div>
        <div className="driver_map_div">
          <h3>Navigation Route</h3>
          <MapsComponentDriver
            apikey="UnbWgWcc8jTQ5mzvc7_Wv4DhHnKhqX4SEt7HtdpDUyw"
            waypoints={waypoints}
          />
        </div>
      </div>
    </>
  );
};

export default DriverInterface;
