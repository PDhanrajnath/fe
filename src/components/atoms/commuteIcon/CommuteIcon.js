import React from "react";
import PropTypes from "prop-types";
import TrainOutlinedIcon from "@material-ui/icons/TrainOutlined";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import DriveEtaOutlinedIcon from "@material-ui/icons/DriveEtaOutlined";
import DirectionsBikeOutlinedIcon from "@material-ui/icons/DirectionsBikeOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "16px",
    // height: "19px",
    width: 24,
    height: 24,
    // marginRight: 8,
  },
  iconUnselected: {
    color: theme.palette.secondary.main,
  },
  iconSelected: {
    color: "#ffffff",
  },
  avatarSelected: {
    background: theme.palette.primary.main,
  },
  avatarUnselected: {
    background: "transparent",
  },
}));

const CommuteIcon = ({ type, selected, onClick, ...props }) => {
  const classes = useStyles();
  const iconColor = selected
    ? classes["iconSelected"]
    : classes["iconUnselected"];
  const avatarColor = selected
    ? classes["avatarSelected"]
    : classes["avatarUnselected"];

  return (
    <div
      className={props.className}
      onClick={
        props.isJobCard
          ? () => {}
          : () => {
              onClick(type);
            }
      }
    >
      <Avatar className={avatarColor}>
        {type === "metro" ? (
          <TrainOutlinedIcon
            data-testid="metro"
            className={[classes.root, iconColor].join(" ")}
          />
        ) : type === "bus" ? (
          <DirectionsBusIcon
            data-testid="bus"
            className={[classes.root, iconColor].join(" ")}
          />
        ) : type === "car" ? (
          <DriveEtaOutlinedIcon
            data-testid="car"
            className={[classes.root, iconColor].join(" ")}
          />
        ) : (
          <DirectionsBikeOutlinedIcon
            data-testid="bike"
            className={[classes.root, iconColor].join(" ")}
          />
        )}
      </Avatar>
    </div>
  );
};

CommuteIcon.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};

export default CommuteIcon;
