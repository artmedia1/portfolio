import React from "react";
import "./Navbar.css";
import Button from "@mui/material/Button";

function NavbarBtn(props) {
  const handleButtonClick = () => {
    props.scrollToSection(props.section);
  };

  return (
    <Button
      className={`navbarListItem ${props.isActive ? "active" : ""}`}
      color="inherit"
      onClick={handleButtonClick}
    >
      <h3>{props.name}</h3>
    </Button>
  );
}

export default NavbarBtn;
