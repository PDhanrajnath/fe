import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  medium: {
    width: "138px",
    height: "50px",
    padding: theme.spacing(2, 4),
  },
  small: {
    width: "101px",
    height: "38px",
    padding: theme.spacing(1, 4),
  },
  medium2: {
    width: "151px",
    height: "50px",
    padding: theme.spacing(1, 4),
  },
  long: {
    width: "208px",
    height: "50px",
    padding: theme.spacing(1, 4),
  },
  common: {
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "14px",
    textTransform: "none",
    fontFamily: theme.typography.fontFamily,
  },
}));

const Button = (props) => {
  const classes = useStyles();
  return (
    <MuiButton
      variant={props.variant}
      color={props.color}
      className={`${classes[props.type]} ${classes.common}`}
      onClick={props.onClick}
      data-testid="button"
    >
      {props.label}
    </MuiButton>
  );
};

Button.defaultProps = {
  variant: "outlined",
  type: "medium",
  label: "button",
  color: "primary",
};

export default Button;
