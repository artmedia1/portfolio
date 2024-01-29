// src/Footer.js
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <AppBar position="static" sx={{ top: 'auto', bottom: 0, backgroundColor:"#323232"}}>
            <Toolbar>
                <IconButton
                    edge="start"
                    sx={{ color: 'white' }}
                    href="https://www.linkedin.com/in/randy-huynh1/"  // Replace "#linkedin" with your LinkedIn URL
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedInIcon />
                </IconButton>
                <IconButton
                    edge="start"
                    sx={{ color: 'white' }}
                    href="https://github.com/artmedia1"  // Replace "#github" with your GitHub URL
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    edge="start"
                    sx={{ color: 'white' }}
                    href="mailto:Randy_Huynh@hotmail.com"
                >
                    <EmailIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <Typography variant="body2" color="inherit">
                    &copy; {new Date().getFullYear()} Randy Huynh
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
