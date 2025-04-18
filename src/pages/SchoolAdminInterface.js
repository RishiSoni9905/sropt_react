import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddDrivers from '../components/AddDrivers';
import AddStudents from '../components/AddStudents';
import StudentDetails from '../components/StudentDetails';
import DriverDetails from '../components/DriverDetails';
import NavBar from '../components/NavBar';

const SchoolAdminInterface = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('add-drivers');

  useEffect(() => {
    
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (!user || !user.username || user.userType !== 'admin') {
      navigate('/main_login'); 
    }
  }, [navigate]);

  const renderComponent = () => {
    switch (activeTab) {
      case 'add-drivers':
        return <AddDrivers />;
      case 'add-students':
        return <AddStudents />;
      case 'student-details':
        return <StudentDetails />;
      case 'driver-details':
        return <DriverDetails />;
      default:
        return <AddDrivers />;
    }
  };

  return (
    <>
      <NavBar/>
      <div className="school-admin-layout">
        <div className="side-nav">
          <ul>
            <li className={activeTab === 'add-drivers' ? 'active' : ''} onClick={() => setActiveTab('add-drivers')}>Add Drivers</li>
            <li className={activeTab === 'add-students' ? 'active' : ''} onClick={() => setActiveTab('add-students')}>Add Students</li>
            <li className={activeTab === 'student-details' ? 'active' : ''} onClick={() => setActiveTab('student-details')}>Student Details</li>
            <li className={activeTab === 'driver-details' ? 'active' : ''} onClick={() => setActiveTab('driver-details')}>Driver Details</li>
          </ul>
        </div>

        <div className="content-area">
          <h1>School Admin Interface</h1>
          {renderComponent()}
        </div>
      </div>
    </>
  );
};

export default SchoolAdminInterface;
