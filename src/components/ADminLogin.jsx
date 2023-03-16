import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import BlueGradianBox from "./BlueGradianBox";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer";



const useStyles = makeStyles(() => ({
  container: {
    position: "relative",
    zIndex: 1,
    background: "white",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "20px",
    justifyContent: "space-between",
    maxWidth: "40%",
    margin: "70px auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  },
}));

const AdminLoginForm = () => {
  const classes = useStyles();


  const navigate = useNavigate();
  const [data, setData] = useState({username: "", password: "", rememberMe: false });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: name === "rememberMe" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.username === process.env.REACT_APP_ADMIN_USERNAME && data.password === process.env.REACT_APP_ADMIN_PASSWORD) {
      alert("login sucessful")

      navigate("/postJob")
    } else {
      alert("invalid")
    }

  };

  return (
    <>
      <Navbar />
      <BlueGradianBox />
      
      <Box className = {classes.container}
        sx={{
        
        }}
      >
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <TextField id="username" name="username" label="username" variant="outlined" value={data.username} onChange={handleChange} margin="normal" required />
          <TextField
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            value={data.password}
            onChange={handleChange}
            margin="normal"
            required
          />
          <FormControlLabel
            control={<Checkbox id="rememberMe" name="rememberMe" checked={data.rememberMe} onChange={handleChange} />}
            label="Remember me"
            sx={{ marginTop: "20px" }}
          />
          <Button variant="contained" type="submit" sx={{ marginTop: "20px" }}>
            Login
          </Button>
        </form>
      </Box>
      <Footer />
    </>
  );
};

export default AdminLoginForm;
