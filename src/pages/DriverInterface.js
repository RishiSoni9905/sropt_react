import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; 
import ListStudents from "../components/ListStudentsRouting";
import MapsComponentDriver from "../components/MapsComponentDriver";
import NavBar from "../components/NavBar";

const DriverInterface = () => {
  const [students, setStudents] = useState([]);
  const [waypoints, setWaypoints] = useState([]);
  const [searchParams] = useSearchParams(); 
  const username = searchParams.get("username"); 

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const studentResponse = await fetch(
          `http://localhost:5000/students_for_drivers?username=${encodeURIComponent(username)}`, 
          { credentials: "include" }
        );
        const studentData = await studentResponse.json();
        setStudents(studentData);
  
        
        const studentWaypoints = studentData.map(student => {
          const [lat, lng] = student.address.split(" ").map(Number);
          return { lat, lng };
        });
  
        
        const schoolResponse = await fetch("http://localhost:5000/get_school", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ username }) 
        });
  
        if (schoolResponse.ok) {
          const schoolData = await schoolResponse.json();
          const [schoolLat, schoolLng] = schoolData.address.split(" ").map(Number);
  
          
          setWaypoints([...studentWaypoints, { lat: schoolLat, lng: schoolLng }]);
        } else {
          console.error("Failed to fetch school data.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    if (username) {
      fetchData(); 
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
