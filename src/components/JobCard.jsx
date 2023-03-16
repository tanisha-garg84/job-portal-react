import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    backgroundColor: "#F5F5F5",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease-in-out",
    "&:hover": {
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
    },
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2B2D42",
    marginBottom: "10px",
  },
  companyName: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#8D99AE",
    marginBottom: "10px",
  },
  jobDescription: {
    fontSize: "16px",
    color: "#4D4D4D",
    lineHeight: "1.5",
  },
});

const JobCard = ({ jobTitle, companyName, jobDescription }) => {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>{jobTitle}</Typography>
        <Typography className={classes.companyName}>{companyName}</Typography>
        <Typography className={classes.jobDescription}>{jobDescription}</Typography>
      </CardContent>
    </Card>
  );
};
export default JobCard;

