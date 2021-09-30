import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  primary: {
    width: "80px",
    height: "80px",
  },
  secondary: {
    width: "50px",
    height: "50px",
  },
}));

const CompanyLogo = ({ url, alt, isPrimary }) => {
  const classes = useStyles();

  return (
    <div data-testid="img-placeholder">
      <img
        src={url}
        alt={alt}
        className={isPrimary ? classes.primary : classes.secondary}
      />
    </div>
  );
};

CompanyLogo.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  isPrimary: PropTypes.bool,
};

export default CompanyLogo;
