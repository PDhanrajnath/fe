import { Avatar, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  unvisited: {
    color: "#5f7381",
    backgroundColor: "#e3f3f6",
    marginRight: "15px",
    fontSize: "18px",
    fontFamily: theme.typography.fontFamily,
  },
  visited: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    marginRight: "15px",
    fontSize: "18px",
    fontFamily: theme.typography.fontFamily,
  },
}));

const LabelNumber = (props) => {
  const classes = useStyles();
  return (
    <Avatar
      className={props.isVisited ? classes.visited : classes.unvisited}
      size="small"
      data-testid="label-number"
    >
      {props.number}
    </Avatar>
  );
};

export default LabelNumber;
