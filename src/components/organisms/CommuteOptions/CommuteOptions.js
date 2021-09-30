import React, { useState } from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import TransitType from "../../molecules/TransitType/TransitType";
import CommuteRoutes from "../../molecules/CommuteRoutes/CommuteRoutes";
import CabOptions from "../../molecules/CabOptions/CabOptions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "350px",
  },
  optionsLabel: {
    fontSize: "16px",
    color: "#19293b",
  },
  routeLabel: {
    paddingTop: theme.spacing(2),
    fontSize: "14px",
    paddingBottom: theme.spacing(2),
    color: "#19293b",
    fontWeight: "normal",
  },
  googleMapsLabel: {
    paddingTop: theme.spacing(4),
    fontSize: "14px",
  },
  routeDetails: {
    paddingTop: theme.spacing(2),
    fontSize: "12px",
    color: "#19293b",
  },
}));

const defaultCommutes = [
  { type: "metro" },
  { type: "bus" },
  { type: "car" },
  { type: "bike" },
];

const selectCommute = (type) => {
  return defaultCommutes.map((obj) => {
    obj.type === type ? (obj.selected = true) : (obj.selected = false);
    return obj;
  });
};

const CommuteOptions = ({ commuteTypes, cabOptions, selectedCommute }) => {
  const [commute, setCommute] = useState(selectedCommute);
  const icons = selectCommute(commute);

  const classes = useStyles();

  const changeCommute = (type) => {
    setCommute(type);
  };

  return (
    <Grid
      container
      data-testid="commute-options"
      direction="column"
      className={classes.root}
    >
      <Grid item container justify="space-between" alignItems='center'>
        <Typography variant={"h4"} className={classes.optionsLabel}>
          Your Options
        </Typography>
        <CommuteRoutes
          icons={icons}
          primary={false}
          isJobCard={false}
          onClick={changeCommute}
        />
      </Grid>

      {commute !== "car" ? (
        <>
          <Grid item container justify="space-between">
            <Typography variant={"h4"} className={classes.routeLabel}>
              Maredpally - Hitech City
            </Typography>
            <Typography variant={"subtitle2"} className={classes.routeDetails}>
              $50 &bull; 56 mins
            </Typography>
          </Grid>
          <Grid item>
            {commuteTypes.map((item) => (
              <TransitType
                description={item.description}
                type={item.type}
                fare={item.fare}
                isLate={item.isLate}
                lateStatus={item.lateStatus}
                time={item.time}
              />
            ))}
          </Grid>
          <Grid item>
            <Typography
              variant={"h6"}
              color={"primary"}
              className={classes.googleMapsLabel}
            >
              View in google maps
            </Typography>
          </Grid>
        </>
      ) : (
        <>
          <Grid item>
            <CabOptions options={cabOptions} />
          </Grid>
        </>
      )}
    </Grid>
  );
};

CommuteOptions.propTypes = {
  commuteTypes: PropTypes.array.isRequired,
};

export default CommuteOptions;
