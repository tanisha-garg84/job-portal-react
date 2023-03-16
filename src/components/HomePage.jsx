import React from "react";
import JobCard from "./JobCard";
import JobPortalSearchBox from "./SearchBox";
import BlueGradianBox from "./BlueGradianBox";
import Box from "@mui/material/Box";
import Navbar from "./NavBar";
import { makeStyles } from "@mui/styles";
import AboutJustJobs from "./AboutJustJobs";
import Testimonials from "./Testimonials";
import CompanyLogos from "./MajorCompaniesHomePage";
import Footer from "./Footer";

const useStyles = makeStyles({
  card: {
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

function HomePage() {

  const classes = useStyles();
  
  const arr = JSON.parse(localStorage.getItem("formData"));

  return (
    <>
      <Navbar />
      <BlueGradianBox />
      <JobPortalSearchBox />
      <AboutJustJobs />
      <Testimonials />
      <CompanyLogos />
      <Footer />
      <Box className={classes.card}>
        {arr?.map((element) => (
          <JobCard jobTitle={element.jobTitle} companyName={element.companyName} jobDescription={element.jobDescription} />
        ))}
      </Box>
    </>
  );
}

export default HomePage;
