import React from "react";
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
  nav: {
    position: "sticky",
    top: "0",
    zIndex: "2",
    margin: "0%",
    padding: "0px",
    marginTop: "0%",
    width: "100vw",
    backgroundColor: "black",
  },
});

function HomePage() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.nav}>
        <Navbar />
      </Box>
      <BlueGradianBox />
      <JobPortalSearchBox />
      <AboutJustJobs />
      <Testimonials />
      <CompanyLogos />
      <Footer />
    </>
  );
}

export default HomePage;
