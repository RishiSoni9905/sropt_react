import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button"; 
import { FaUserCircle } from "react-icons/fa"; 
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";

function HideOnScroll(props) {
  const { children, window } = props;   
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const navItems = [
  { label: "Dashboard", path: "/dashboard", scrollHeight: null }, 
  { label: "Contact Us", path: "/contact", scrollHeight: 10000 },
  { label: "Pricing", path: "/about", scrollHeight: 1700 },
  { label: "Services", path: "/services", scrollHeight: 600 },
];

const settings = [
  { label: "Admin Login", path: "/main_login" },
  { label: "Student Login", path: "/school_login" },
  { label: "Driver Login", path: "/driver_login" },
  { label: "Logout", action: true },
];

function NavBar() {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }; 

  const handleMenuClick = (setting) => {
    if (setting.action) {
      fetch('http://localhost:5000/logout', { 
        method: 'POST',
        credentials: 'include', 
      })
      .then(response => {
        if (response.ok) {
          sessionStorage.removeItem('user'); 
          navigate('/'); 
        } else {
          alert('Logout failed');
        }
      })
      .catch(error => {
        console.error('Error during logout:', error);
        alert('An error occurred while logging out');
      });
    } else {
      navigate(setting.path);
    }
    handleCloseUserMenu();
  };
  
  

  const handleNavItemClick = (item) => {
    if (item.label === "Dashboard") {
      const user = JSON.parse(sessionStorage.getItem('user')); 
      
      if (!user) {
        window.location.reload();
      } else {
        
        if (user.userType === "admin") {
          navigate('/school_admin_interface');
        } else if (user.userType === "driver") {
          navigate('/driver_interface');
        } else if (user.userType === "student") {
          navigate('/student_interface');
        } else {
          alert("Unauthorized user type");
        }
      }
    } else {
      navigate(item.path);
      if (item.scrollHeight !== null) {
        setTimeout(() => {
          window.scrollTo(0, item.scrollHeight);
        }, 100); 
      }
    }
  };
  

  return (
    <AppBar position="sticky" style={{ backgroundColor: "default", color: "black", position:"fixed", top:0 }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="a" href="#" sx={{ mr: 2, fontFamily: "monospace", fontWeight: 700, letterSpacing: ".3rem", color: "inherit", textDecoration: "none" }}>
            SRO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavItemClick(item)}
                sx={{ color: "white", my: 2 }} 
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open user menu">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "inherit", backgroundColor: "gray" }}>
                <FaUserCircle size={36} color="white" />
              </IconButton>
            </Tooltip>
            <Menu sx={{ mt: "45px" }} anchorEl={anchorElUser} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem key={setting.label} onClick={() => handleMenuClick(setting)}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
