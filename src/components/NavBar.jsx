import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { Button } from "@mui/material";
import logo from "./Assets/logo.jpeg";
import Box from "@mui/material/Box";

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: "#fff",
    color: "#333",
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Box>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <img
            src={logo}
            alt="react"
            style={{ width: "150px", height: "50px" }}
          />

          <Box
            sx={{
              display: "flex",
              "flex-direction": "row-reverse",
              width: "100%",
              gap: "20px",
            }}
          >
            <Button className="login">Employer Zone</Button>
            <Button
              variant="outlined"
              onClick={() => navigate("/CategorizedJobs")}
            >
              JobSeeker
            </Button>
            <Button variant="contained" onClick={() => navigate("/adminLogin")}>
              Post a Job
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
