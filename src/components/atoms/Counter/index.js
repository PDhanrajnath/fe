import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  jobs: {
    width: 200,
    height: 72,
    fontSize: 100,
    fontWeight: 300,
  },
  city: {
    width: 148,
    height: 62,
    paddingLeft: 18,
    fontWeight: 500,
    marginLeft: 10,
  },
}));

const Counter = (props) => {
  const classes = useStyles();
  const { totalJobs, city, dataTestId } = props;
  return (
    <div style={{ justifyContent: "center" }} data-testid={dataTestId}>
      {totalJobs && (
        <div>
          <Typography variant="h3" className={classes.jobs}>
            {totalJobs}
          </Typography>
        </div>
      )}
      {city && (
        <div>
          <Typography variant="h5" className={classes.city}>
            {city}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Counter;
