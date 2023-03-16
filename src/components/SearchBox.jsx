import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  searchBox: {
    position: "relative",
    zIndex: 1,
    background: "white",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "60%",
    margin: "70px auto",
  },
});

function JobPortalSearchBox() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [filterDataInput, setFilterDataInput] = React.useState({
    jobType: "",
    jobLocation: "",
    searchData: "",
  });

  const handleFilterInputDataChange = (event) => {
    setFilterDataInput((pre) => ({
      ...pre,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(filterDataInput);

  const handleSearch = () => {
    console.log(`yes`);
    localStorage.setItem("searchData", JSON.stringify(filterDataInput));
    navigate("/filteredJobs");
  };

  const jobTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Temporary",
    "Internship",
  ];
  const jobLocations = ["Noida", "Bangalore", "Hyderabad", "Chennai", "Pune"];

  return (
    <Box className={classes.searchBox}>
      <TextField
        id="search"
        label="Search Jobs"
        variant="outlined"
        name="searchData"
        value={filterDataInput.searchData}
        onChange={handleFilterInputDataChange}
      />

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="job-type-label">Select Category</InputLabel>
        <Select
          style={{ width: "200px" }}
          labelId="job-type-label"
          id="job-type"
          name="jobType"
          value={filterDataInput.jobType}
          onChange={handleFilterInputDataChange}
          label="Job Type"
        >
          {jobTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="job-location-label">Job Location</InputLabel>
        <Select
          style={{ width: "200px" }}
          labelId="job-location-label"
          id="job-location"
          value={filterDataInput.jobLocation}
          name="jobLocation"
          onChange={handleFilterInputDataChange}
          label="Job Location"
        >
          {jobLocations.map((location) => (
            <MenuItem key={location} value={location}>
              {location}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
}

export default JobPortalSearchBox;
