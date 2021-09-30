import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import TabGroup from "../../molecules/TabGroup/TabGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
    fontWeight: 600,
    alignItems: "center",
    margin: "1px auto",
    textAlign: "center",
  },
  leftNav: {
      padding: theme.spacing(4),
  }
}));

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.leftNav} data-testid="nav-bar" >
      <Typography variant="h6" className={classes.root}>
        Green Commute 
      </Typography>
      <TabGroup />
    </div>
  );
};

export default Navbar;
