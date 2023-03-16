import React from "react";
import Navbar from "./NavBar";
import BlueGradianBox from "./BlueGradianBox";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  FormControl,
  FormGroup,
  FormLabel,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 249,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textField: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    margin: theme.spacing(1),
  },
  container: {
    position: "relative",
    zIndex: 1,
    background: "white",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "40%",
    margin: "70px auto",
  },
}));

const jobTypes = ["Full-time", "Part-time", "Contract", "Temporary", "Internship"];
const jobLocations = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

const PostJobForm = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [data, setData] = React.useState({
    jobTitle: "",
    jobType: "",
    jobLocation: "",
    salary: "",
    resume: false,
    phone: false,
    interview: false,
    description: "",
  });

  const handleChange = (event) => {
    const tag = event.target.name;
    if( tag === "resume" || tag === "phone" || tag === "interview"){
      setData((pre) => ({ ...pre, [tag]: event.target.checked }));
    }
  else {
    setData({ ...data, [tag]: event.target.value });

  }
  };
  // console.log(data);
  const handleSubmit = (event) => {
    console.log(`yes`);
    event.preventDefault();
    let oldData = JSON.parse(localStorage.getItem("formData"));
    oldData = oldData ? JSON.parse(localStorage.getItem("formData")) : [];
    oldData.push(data);
    console.log(oldData);
    localStorage.setItem("formData", JSON.stringify(oldData));
  };

  return (
    <>
      <Navbar />
      <BlueGradianBox />
      <Box className={classes.container}>
        <form
          style={{
            display: "flex",
            // flexDirection: "column",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            id="job-title"
            label="Job Title"
            variant="outlined"
            className={classes.textField}
            value={data.jobTitle}
            onChange={handleChange}
            name = "jobTitle"
          />

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="job-type-label">Job Type</InputLabel>
            <Select labelId="job-type-label" id="job-type" name="jobType" value={data.jobType} onChange={handleChange} label="Job Type">
              {jobTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="job-location-label">Job Location</InputLabel>
            <Select labelId="job-location-label" id="job-location" name="jobLocation" value={data.jobLocation} onChange={handleChange} label="Job Location">
              {jobLocations.map((location) => (
                <MenuItem key={location} value={location}>
                  {location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField id="salary" label="Salary" variant="outlined" name="salary" className={classes.textField} value={data.salary} onChange={handleChange} />

          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Hiring Process</FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox checked={data.resume} onChange={handleChange} name="resume" />} label="Resume" />
              <FormControlLabel
                control={<Checkbox checked={data.phone} onChange={handleChange} name="phone" />}
                label="Phone Interview"
              />
              <FormControlLabel
                control={<Checkbox checked={data.interview} onChange={handleChange} name="interview" />}
                label="In-Person Interview"
              />
            </FormGroup>
          </FormControl>

          <TextField
            id="description"
            label="Job Description"
            multiline
            
            rows={4}
            name="description"
            variant="outlined"
            className={classes.textField}
            value={data.description}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" onClick ={navigate("/category")}>
          Post Job
        </Button>
        </form>
         
      </Box>
    </>
  );
};

export default PostJobForm;
