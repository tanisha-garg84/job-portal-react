
import React from "react";
import JobCard from "./JobCard";
import BlueGradianBox from "./BlueGradianBox";
import Box from "@mui/material/Box";
import Navbar from "./NavBar";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  card: {
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
function CategorizedJobs() {
  
  const classes = useStyles();
  const searchData = JSON.parse(localStorage.getItem("searchData"));
  const arr = JSON.parse(localStorage.getItem("formData"));
  console.log(searchData);
  return (
    <>
      {" "}
      <Navbar /> <BlueGradianBox />{" "}
      <Box className={classes.card}>
        {" "}
        {arr
          ?.filter(
            (value) =>
              value.jobType === searchData.jobType ||
              value.jobLocation === searchData.jobLocation ||
              value.jobTitle === searchData.searchData
          )
          .map((filteredJobs) => (
            <JobCard
              jobTitle={filteredJobs.jobTitle}
              companyName={filteredJobs.companyName}
              jobDescription={filteredJobs.jobDescription}
            />
          ))}
      </Box>{" "}
    </>
  );
}
export default CategorizedJobs;
