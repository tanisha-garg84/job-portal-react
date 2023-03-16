import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 500,
    margin: "auto",
    marginBottom: "50px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  name: {
    fontWeight: "bold",
    marginBottom: "5px",
  },
  jobTitle: {
    marginBottom: "10px",
  },
  message: {
    lineHeight: 1.5,
  },
}));

function TestimonialCard(props) {
  const classes = useStyles();
  const { name, jobTitle, message } = props;

  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          <Typography variant="h6" className={classes.name}>
            {name}
          </Typography>
        }
        subheader={
          <Typography variant="subtitle1" className={classes.jobTitle}>
            {jobTitle}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body1" className={classes.message}>
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
