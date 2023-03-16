import React from "react";
import { useNavigate , Link} from "react-router-dom";
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
    <Box className="box_item">
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <Link to = "/">
          <img
            src={logo}
            alt="react"
            style={{ width: "150px", height: "50px" }}
          />
          </Link>
          <Box
            sx={{
              display: "flex",
              "flex-direction": "row-reverse",
              width: "100%",
              gap: "20px",
            }}
          >
            <Button className="login" onClick={() => navigate("/AdminLogin")}>Admin Login</Button>
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
