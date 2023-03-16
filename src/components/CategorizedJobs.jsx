
import React from "react";
import JobCard from "./JobCard";
import BlueGradianBox from "./BlueGradianBox";
import Navbar from "./NavBar";
import { makeStyles } from "@mui/styles";
import JobPortalSearchBox from "./SearchBox";
import Footer from "./Footer";
import { Box, Container, Typography } from "@mui/material";


const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#e3f2fd", 
    marginTop : "30px", 
    paddingTop: "30px",
    paddingBottom: "20px",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.4)", 

  },
  title: {
    fontWeight: "bold",
    marginBottom: "30px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "3.5rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#0b1046",
    textShadow:" 2px 2px 2px rgba(89, 13, 211, 0.553)",
    margin: "2rem 0",
    
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection : "row",
    margin : "20px",
    textAlign : "center"
  },
}));

function CategorizedJobs() {
  
  const classes = useStyles();
  const searchData = JSON.parse(localStorage.getItem("formData"));
  const arr = JSON.parse(localStorage.getItem("formData"));
  console.log(searchData);
  return (
    <>
      
      <Navbar /> <BlueGradianBox /> <JobPortalSearchBox />
      
      <Box  sx={{display : "flex" , justifyContent : "space-between"}} className={classes.root} >
      <Container  >
        <Typography variant="h3" className={classes.title} id="heading">
          Various Jobs
        </Typography>
        <Box>
        {arr
          // ?.filter(
          //   (value) =>
          //     value.jobType === searchData.jobType ||
          //     value.jobLocation === searchData.jobLocation ||
          //     value.jobTitle === searchData.searchData
          // )
          .map((filteredJobs) => (
            
            <JobCard
              jobTitle={filteredJobs.jobTitle}
              companyName={filteredJobs.companyName}
              jobDescription={filteredJobs.jobDescription}
            />
          )
          )}
          </Box>
          </Container>
      </Box>



      <Footer />
    </>
  );
}
export default CategorizedJobs;
