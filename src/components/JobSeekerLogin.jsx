import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';

const JobSeekerForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
 
  return (
   
    <Box>
         <form style={{ "display" : 'flex',
   "flexDirection" : 'column',
    "justifyContent" : 'center',
    "width" : '100%',
    "alignItems" : 'center' ,
    "padding" : '30px',
    }} >
    
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={data.email}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        value={data.password}
      />
      <Box sx={{display : 'flex' , flexDirection :'row'}} >
      <Checkbox {...label}  />
      <p> Keep me signed in</p>
      
      </Box>
      <p> New to JustJobs?</p>
      <Link to ="/register" >Create an account!</Link>
      <Button variant="contained">Login</Button>
      </form>
    </Box>
    
  );
};

export default JobSeekerForm;
