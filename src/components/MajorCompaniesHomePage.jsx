import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import companyLogo1 from "./Assets/companyLogo1.png";
import companyLogo2 from "./Assets/companyLogo2.png";
import companyLogo3 from "./Assets/companyLogo3.jpg";
import companyLogo4 from "./Assets/companyLogo4.png";
import companyLogo5 from "./Assets/companyLogo5.png";



const companies = [
  {
    name: "Company 1",
    logo: companyLogo1,
  },
  {
    name: "Company 2",
    logo: companyLogo2,
  },
  {
    name: "Company 3",
    logo: companyLogo3,
  },
  {
    name: "Company 4",
    logo: companyLogo4,
  },
  {
    name: "Company 5",
    logo: companyLogo5,
  },
];

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#f7f7f7",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "50px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  logo: {
    width: "150px",
    height: "auto",
    margin: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
}));

function CompanyLogos() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h3" className={classes.title} id="heading">
        Featured Companies
      </Typography>
      <Box className={classes.logoContainer}>
        {companies.map((company, index) => (
          <img
            key={index}
            src={company.logo}
            alt={company.name}
            className={classes.logo}
          />
        ))}
      </Box>
    </Box>
  );
}

export default CompanyLogos;
