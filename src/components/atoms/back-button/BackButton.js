import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  backButton: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  backIcon: {
    color: theme.palette.secondary.main,
    paddingRight: theme.spacing(1),
    fontSize: theme.spacing(4),
  },
  buttonLabel: {
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.fontFamily,
    fontWeight: "500",
    fontSize: theme.spacing(4),
  },
}));

const BackButton = ({ label, onClick }) => {
  const classes = useStyles();
  return (
    <div
      id="backButton"
      className={classes.backButton}
      onClick={onClick}
      data-testid="back-button"
    >
      <ArrowBack className={classes.backIcon} />
      <span className={classes.buttonLabel}>{label}</span>
    </div>
  );
};

BackButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default BackButton;
