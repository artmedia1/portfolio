import React, { useState } from "react";
import "../Section.css";
import "./Contact.css";
import { TextField, Button, Grid } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:${email}?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="ContactSection">
      <h1>Contact Me</h1>
      <p>Please fill out the form below to send me a message!</p>
      <form onSubmit={handleSubmit}>
        <TextField
          className="contact-input"
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          className="contact-input"
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          className="contact-input"
          label="Message"
          name="message"
          multiline
          minRows={4}
          maxRows={12}
          fullWidth
          margin="normal"
          value={formData.message}
          onChange={handleChange}
          inputProps={{ style: { color: "white" } }} //normal css and sx prop doesn't work with multiline
        />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          marginTop="15px"
        >
          <Button
            size="large"
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "#323232" }}
          >
            Send
          </Button>
        </Grid>
      </form>
    </section>
  );
};

export default Contact;
