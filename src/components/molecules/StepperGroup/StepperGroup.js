import { makeStyles } from "@material-ui/core";
import React from "react";
import Stepper from "../Stepper/Stepper";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    // width: "700px",
  },
  items: {
    display: "flex",
    alignItems: "center",
  },
});

const StepperGroup = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root} data-testid="stepper-group">
      <Stepper  number="1"  label="Your Location" isVisited={props.item1}/>
      <Stepper number="2"  label="Job Location" isVisited={props.item2} />
      <Stepper number="3" label="Your skills" isVisited={props.item3} />
    </div>
  );
};

export default StepperGroup;
