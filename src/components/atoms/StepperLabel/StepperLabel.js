import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 500,
  },
}));

const StepperLabel = (props) => {
  const classes = useStyles();
  return (
    <Typography
      style={{
        color: props.isVisited ? "#5ac568" : "#5f7381",
        fontSize: "18px",
        marginRight: "15px",
      }}
      className={classes.root}
      data-testid="stepper-label"
    >
      {props.label}
    </Typography>
  );
};

export default StepperLabel;
