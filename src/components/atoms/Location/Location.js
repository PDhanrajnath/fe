import React from "react";
import PropTypes from "prop-types";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main,
    width: "20px",
    height: "20px",
  },
  label: {
    fontSize: "16px",
    paddingLeft: "10px",
    paddingTop: "3px",
    display: "inline",
    position: "absolute",
  },
}));

export const Location = ({ label }) => {
  const classes = useStyles();

  return (
    <div data-testid="location-placeholder">
      <RoomOutlinedIcon className={classes.root}></RoomOutlinedIcon>
      <Typography className={classes.label} variant="h4">
        {label}
      </Typography>
    </div>
  );
};

Location.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
};

Location.defaultProps = {
  label: "label",
};
