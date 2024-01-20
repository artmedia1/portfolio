import React from 'react';
import { lightBlue } from '@mui/material/colors';

function PortfolioPage() {
  const pageStyle = {
    textAlign: 'center',
    marginTop: '0',
    backgroundColor: lightBlue["A100"], // Set the background color
    minHeight: '100vh', // Ensure it covers the full viewport height
    color: '#fff' // Set text color to white or any color that contrasts well with light blue
  };

  return (
    <div >
        <h1 style={pageStyle}>Portfolio</h1>
    </div>
  );
}

export default PortfolioPage;
