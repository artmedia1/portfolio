import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { lightBlue } from '@mui/material/colors';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';


function Header() {
  const navigate = useNavigate();
  return (
    <AppBar position="static" sx={{ backgroundColor: lightBlue['A100'] }}>
      <Toolbar style={{ justifyContent: 'center' }}>
        <Box flexGrow={1} style={{ maxWidth: '16.666%' }}> {/* Left Spacer */} </Box>
        <Box display="flex" justifyContent="center" flexGrow={2} style={{ maxWidth: '66.666%' }}>
          <Button className="buttonText" color="inherit" onClick={() => navigate('/')}>Home</Button>
          <Button className="buttonText" color="inherit" onClick={() => navigate('/about')}>About</Button>
          <Button className="buttonText" color="inherit" onClick={() => navigate('/portfolio')}>Portfolio</Button>
        </Box>
        <Box flexGrow={1} style={{ maxWidth: '16.666%' }}> {/* Right Spacer */} </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
