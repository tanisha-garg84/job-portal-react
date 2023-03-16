import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "#f5f5f5",
    color: "#0b1046",
    padding: "50px 20px",
    textAlign: "center",
    maxWidth: 900,
    margin: "0 auto",
    borderRadius: 5,
    boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
    marginTop: "50px",
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

  text: {
    lineHeight: 1.5,
    textAlign: "center",
    fontWeight: "700",
    fontSize: "1.2rem",

  },
}));

function AboutJustJobs() {
  const classes = useStyles();

  return (
    <Box className={classes.container} >
      <Typography variant="h3" className={classes.title}>
        About JustJobs
      </Typography>
      <Typography variant="body1" className={classes.text} >
        JustJobs is a job portal that connects job seekers with employers. We
        believe that everyone deserves a fair chance at finding the right job,
        and that employers should have access to a diverse pool of candidates.
        With JustJobs, you can search for job listings, post your resume, and
        apply for jobs with just a few clicks. Our platform is easy to use and
        provides personalized job recommendations based on your skills and
        experience. Whether you're a recent graduate or an experienced
        professional, JustJobs can help you find your next career opportunity.
      </Typography>
    </Box>
  );
}

export default AboutJustJobs;

