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

function Navbar() {
  const [activeSection, setActiveSection] = useState("HomeSection");
  const [drawerState, setDrawerState] = useState(false);

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
      section: "EducationSection",
      name: "Education",
    },
    {
      section: "ExperienceSection",
      name: "Experience",
    },
    {
      section: "PortfolioSection",
      name: "Portfolio",
    },
  ];

  // Handles the logic for setting the active section and highlighting the buttons
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const contactSection = document.getElementById("ContactSection");

    let activeSection = "HomeSection";
    for (const button of buttons) {
      const section = document.getElementById(button.section);
      if (contactSection && scrollPosition >= contactSection.offsetTop) {
        activeSection = "ContactSection";
      } else if (section && scrollPosition >= section.offsetTop) {
        activeSection = button.section;
      }
    }
    setActiveSection(activeSection);
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
