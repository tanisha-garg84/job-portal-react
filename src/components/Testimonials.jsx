import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TestimonialCard from "./TestimonialCard"; 


const testimonials = [
  {
    name: "Tanisha Garg",
    jobTitle: "Software Engineer",
    message:
      "JustJobs helped me find my dream job in just a few weeks of searching. The platform is easy to use and the job recommendations were spot on!",
  },
  {
    name: "Mayukh Sharma",
    jobTitle: "Graphic Designer",
    message:
      "I was skeptical about using a job portal at first, but JustJobs exceeded my expectations. The personalized job recommendations and resume builder feature were incredibly helpful.",
  },
  {
    name: "Puneet Sharma",
    jobTitle: "Sales Manager",
    message:
      "I've used several job portals in the past, but JustJobs stands out for its user-friendly interface and comprehensive job listings.",
  },
];

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

function Testimonials() {
  const classes = useStyles();

  return (
    <Box sx={{display : "flex" , justifyContent : "space-between"}} className={classes.root}>
      <Container  >
        <Typography variant="h3" className={classes.title} id="heading">
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

