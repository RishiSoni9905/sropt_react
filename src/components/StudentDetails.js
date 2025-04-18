import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocation } from "react-router-dom"; 

const StudentDetails = () => {
  const [students, setStudents] = useState([]);
  const [showPasswords, setShowPasswords] = useState([]);
  const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search);
  const username = queryParams.get("username"); 

  
  useEffect(() => {
    if (username) {
      fetch(`http://localhost:5000/students?username=${encodeURIComponent(username)}`, {
        credentials: "include", 
      })
        .then((response) => response.json())
        .then((data) => {
          setStudents(data);
          setShowPasswords(Array(data.length).fill(false)); 
        })
        .catch((error) => {
          console.error("Error fetching student data:", error);
        });
    }
  }, [username]);

  const togglePasswordVisibility = (index) => {
    const updatedVisibility = [...showPasswords];
    updatedVisibility[index] = !updatedVisibility[index];
    setShowPasswords(updatedVisibility);
  };

  const removeStudent = (student_name) => {
    fetch(`http://localhost:5000/remove_students?student_name=${encodeURIComponent(student_name)}`, {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          alert(`Student ${student_name} removed successfully.`);
          
          setStudents(students.filter((student) => student.student_name !== student_name));
        } else {
          alert(`Failed to remove student ${student_name}.`);
        }
      })
      .catch((error) => {
        alert("An error occurred while removing the student.");
        console.error("Error:", error);
      });
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Address</th>
            <th>Contact No</th>
            <th>School ID</th>
            <th>Driver ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{student.student_name}</td>
              <td>{student.address}</td>
              <td>{student.contact_no}</td>
              <td>{student.school_id}</td>
              <td>{student.driver_id}</td>
              <td>{student.username}</td>
              <td>
                {showPasswords[index] ? student.password : "********"}
                <button
                  onClick={() => togglePasswordVisibility(index)}
                  style={{
                    marginLeft: "10px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "black",
                  }}
                >
                  {showPasswords[index] ? <FaEyeSlash /> : <FaEye />}
                </button>
              </td>
              <td>
                <button
                  onClick={() => removeStudent(student.student_name)}
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

export default StudentDetails;
