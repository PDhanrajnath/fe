import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  small: {
    fontSize: 20,
    fontFamily: theme.typography.fontFamily,
  },
  large: {
    fontSize: 26,
    fontFamily: theme.typography.fontFamily,
  },
}));

const Label = (props) => {
  const classes = useStyles();
  const { size, text } = props;
  return (
    <div>
      {size === "large" ? (
        <Typography
          variant="h2"
          className={classes.large}
          data-testid="large-text"
        >
          {text}
        </Typography>
      ) : (
        <Typography
          variant="body2"
          className={classes.small}
          data-testid="small-text"
        >
          {text}
        </Typography>
      )}
    </div>
  );
};

export default Label;
