import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  mockItem: {
    height: "50px",
    alignItems: "center",
    color: theme.typography.subtitle2.color,
    margin: theme.spacing(4, 1),
    borderRadius: "10px",
    fontWeight: theme.typography.subtitle2.fontWeight,
    fontFamily: theme.typography.fontFamily,
  },
  activeItem: {
    color: theme.palette.primary.main,
  },
  inactiveItem: {
    color: theme.typography.subtitle2.color,
  },
  inactiveIcon: {
    color: theme.palette.secondary.main,
    minWidth: theme.spacing(10),
  },
  activeIcon: {
    color: theme.palette.primary.main,
    minWidth: theme.spacing(10),
  },
  label: {
    fontWeight: theme.typography.subtitle2.fontWeight,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.spacing(4),
  },
}));

const TabItem = (props) => {
  const classes = useStyles();
  const { index, value, setValue, isClickable } = props;
  const handleValue = (clickedIndex) => {
    if (isClickable) {
      props.onClick();
      setValue(clickedIndex);
    }
  };
  return (
    <ListItem
      button
      className={classes.mockItem}
      style={{
        backgroundColor: value === index ? "rgba(90, 197, 104, 0.15)" : "white",
      }}
      onClick={() => handleValue(index)}
      data-testid="tab-item"
    >
      <ListItemIcon
        className={value === index ? classes.activeIcon : classes.inactiveIcon}
      >
        {props.icon}
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={
          <Typography className={classes.label}>{props.label}</Typography>
        }
        className={
          value === props.index ? classes.activeItem : classes.inactiveItem
        }
      />
    </ListItem>
  );
};
export default TabItem;
