import React, { useState, useEffect } from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import NavbarBtn from "./NavbarBtn";
import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";
import Hidden from "@mui/material/Hidden";
import Button from "@mui/material/Button";
// import {styled, Drawer as MuiDrawer} from '@mui/material'
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ContactPageIcon from "@mui/icons-material/ContactPage";

function Navbar() {
  const [activeSection, setActiveSection] = useState("HomeSection");
  const [drawerState, setDrawerState] = useState(false);

  const handleScroll = () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    // Get sections
    const aboutSection = document.getElementById("AboutSection");
    const portfolioSection = document.getElementById("PortfolioSection");
    const contactSection = document.getElementById("ContactSection");

    // Set state based on scroll position. Check from bottom to top.
    if (contactSection && scrollPosition >= contactSection.offsetTop) {
      setActiveSection("ContactSection");
    } else if (
      portfolioSection &&
      scrollPosition >= portfolioSection.offsetTop
    ) {
      setActiveSection("PortfolioSection");
    } else if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
      setActiveSection("AboutSection");
    } else {
      setActiveSection("HomeSection"); // Default to home
    }
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState(open);
  };

  //Closes drawer and scroll logic
  function handleListItemClick(sectionId) {
    scrollToSection(sectionId);
    setDrawerState(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const buttons = [
    {
      section: "HomeSection",
      name: "Home",
    },
    {
      section: "AboutSection",
      name: "About",
    },
    {
      section: "PortfolioSection",
      name: "Portfolio",
    },
  ];

  return (
    <AppBar className="appbar" position="fixed" elevation={0}>
      <Toolbar style={{ justifyContent: "center", backgroundColor: "#1e1e1e" }}>
        <Box flexGrow={1} style={{ maxWidth: "30%" }}>
          <CodeIcon className="code-icon" sx={{ fontSize: 60 }} />
        </Box>

        <Box className="btn-container">
          <Hidden only={["xs", "sm"]}>
            {buttons.map((btn, index) => (
              <NavbarBtn
                key={index}
                section={btn.section}
                name={btn.name}
                scrollToSection={scrollToSection}
                isActive={activeSection === btn.section}
              />
            ))}
          </Hidden>
        </Box>

        <Box className="contact-container">
          <Hidden only={["xs", "sm"]}>
            <NavbarBtn
              section="ContactSection"
              name="Contact"
              scrollToSection={scrollToSection}
              isActive={activeSection === "ContactSection"}
            />
          </Hidden>
          <Hidden only={["md", "lg", "xl"]}>
            <Button onClick={toggleDrawer(true)}>
              <MenuIcon className="menu-icon" />
            </Button>
          </Hidden>
        </Box>
      </Toolbar>
      <Drawer
        anchor="right"
        open={drawerState}
        onClose={toggleDrawer(false)}
        transitionDuration={750}
        className="drawer"
      >
        <List>
          {buttons.map((btn, index) => (
            <ListItem
              key={index}
              onClick={() => handleListItemClick(btn.section)}
            >
              <NavbarBtn
                section={btn.section}
                name={btn.name}
                scrollToSection={scrollToSection}
                isActive={activeSection === btn.section}
              />
            </ListItem>
          ))}
          <ListItem onClick={() => handleListItemClick("ContactSection")}>
            <NavbarBtn
              section="ContactSection"
              name="Contact"
              scrollToSection={scrollToSection}
              isActive={activeSection === "ContactSection"}
            />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
