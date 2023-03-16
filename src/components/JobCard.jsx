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
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  companyName: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  jobDescription: {
    fontSize: "16px",
  },
});

const JobCard = (jobInfo) => {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>{jobInfo.jobTitle}</Typography>
        <Typography className={classes.companyName}>{jobInfo.companyName}</Typography>
        <Typography className={classes.jobDescription}>{jobInfo.jobDescription}</Typography>
      </CardContent>
    </Card>
  );
};
export default JobCard;
