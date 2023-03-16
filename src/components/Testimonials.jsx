import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TestimonialCard from "./TestimonialCard"; // assuming you have a TestimonialCard component

const testimonials = [
  {
    name: "John Doe",
    jobTitle: "Software Engineer",
    message:
      "JustJobs helped me find my dream job in just a few weeks of searching. The platform is easy to use and the job recommendations were spot on!",
  },
  {
    name: "Jane Smith",
    jobTitle: "Graphic Designer",
    message:
      "I was skeptical about using a job portal at first, but JustJobs exceeded my expectations. The personalized job recommendations and resume builder feature were incredibly helpful.",
  },
  {
    name: "Bob Johnson",
    jobTitle: "Sales Manager",
    message:
      "I've used several job portals in the past, but JustJobs stands out for its user-friendly interface and comprehensive job listings.",
  },
];

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#e3f2fd", // lighter blue background color
    marginTop : "30px", 
    paddingTop: "30px",
    paddingBottom: "20px",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.4)", // box shadow

  },
  title: {
    fontWeight: "bold",
    color: "#0b1046", // dark blue text color
    marginBottom: "50px",
    textAlign: "center",
    
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection : "row",
    margin : "20px"
    
  },
}));

function Testimonials() {
  const classes = useStyles();

  return (
    <Box sx={{display : "flex" , justifyContent : "space-between"}} className={classes.root}>
      <Container  >
        <Typography variant="h3" className={classes.title}>
          TESTIMONIALS
        </Typography>
        <Box className={classes.cardContainer}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Testimonials;

