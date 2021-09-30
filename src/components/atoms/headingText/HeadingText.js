import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  headingDiv: {
    maxWidth: "500px",
  },
}));

const HeadingText = ({ label }) => {
  const classes = useStyles();
  return (
    <div
      id="headingText"
      className={classes.headingDiv}
      data-testid="heading-text"
    >
      <Typography variant={"h6"}>{label}</Typography>
    </div>
  );
};

HeadingText.propTypes = {
  label: PropTypes.string.isRequired,
};

export default HeadingText;
