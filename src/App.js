import LoginPage from "./components/LoginPage";
import DriverInterface from "./pages/DriverInterface";
import DriverLogin from "./pages/DriverLogin";
import SchoolAdminInterface from "./pages/SchoolAdminInterface";
import SchoolLogin from "./pages/StudentLogin";
import StudentInterface from "./pages/StudentInterface";
import HomePage from "./pages/HomePage";
import "./styles/common.css";
import "./styles/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path="/main_login" element={<LoginPage />}/>
          <Route path="/school_login" element={<SchoolLogin />}/>
          <Route path="/driver_login" element={<DriverLogin />}/>
          <Route path="/student_interface" element={<StudentInterface />}/>
          <Route path="/driver_interface" element={<DriverInterface />}/>
          <Route path="/school_admin_interface" element={<SchoolAdminInterface />}/>
          <Route path="*" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 
