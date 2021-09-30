import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  primary: {
    fontSize: "18px",
    color: "#324552",
    marginBottom: "8px",
  },
  secondary: {
    fontSize: "14px",
    color: "#5f7381",
    marginBottom: "8px",
  },
});

const CardLabel = ({ label, isPrimary }) => {
  const classes = useStyles();

  const typoStyle = isPrimary ? classes.primary : classes.secondary;
  return (
    <Typography
      className={typoStyle}
      variant="h4"
      data-testid="cardLabel-placeholder"
    >
      {label}
    </Typography>
  );
};

CardLabel.propTypes = {
  label: PropTypes.string,
  isPrimary: PropTypes.bool,
};

export default CardLabel;
