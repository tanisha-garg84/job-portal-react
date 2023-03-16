
import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#1e2330",
    padding: "20px",
    color: "#fff",
    borderTop: "1px solid #ccc",
  },
  footerLink: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  footerText: {
    marginBottom: "20px",
  },
  socialIcon: {
    color: "#fff",
    marginRight: "20px",
    "&:hover": {
      color: "#3f51b5",
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography className={classes.footerText} variant="body2">
              JustJobs is the premier job portal for finding the perfect job
              match for job seekers and employers. Our platform provides an
              easy-to-use interface and powerful search tools to connect
              job-seekers with the right job opportunities.
            </Typography>
            <div>
              <IconButton className={classes.socialIcon}>
                <FacebookIcon />
              </IconButton>
              <IconButton className={classes.socialIcon}>
                <TwitterIcon />
              </IconButton>
              <IconButton className={classes.socialIcon}>
                <LinkedInIcon />
              </IconButton>
              <IconButton className={classes.socialIcon}>
                <InstagramIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Useful Links
            </Typography>
            <ul>
              <li>
                <Link className={classes.footerLink} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={classes.footerLink} href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className={classes.footerLink} href="/jobs">
                  Jobs
                </Link>
              </li>
              <li>
                <Link className={classes.footerLink} href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography className={classes.footerText} variant="body2">
              Address: 123 Main St, Town , India
            </Typography>
            <Typography className={classes.footerText} variant="body2">
              Email: info@justjobs.com
            </Typography>
            <Typography className={classes.footerText} variant="body2">
              Phone: +91-123456789
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" color="inherit" align="center">
          {"© 2023 JustJobs"}
          <Link className={classes.footerLink} href="/">
            </Link>
            </Typography>
            </Container>
            </footer>
  )}

  export default Footer;
