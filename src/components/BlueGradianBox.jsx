import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gradientBox: {
    borderRadius: "0 0 20% 20% / 5vw",
    minHeight: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 65,
    left: 0,
    width: "100%",
    background: "linear-gradient(to bottom, #2196F3, #ADD8E6)",
    zIndex: 0,
  },
});

function BlueGradianBox() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.gradientBox}></Box>
    </>
  );
}

export default BlueGradianBox;
