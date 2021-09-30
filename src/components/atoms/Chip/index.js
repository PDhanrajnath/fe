import React from "react";
import MUIChip from "@material-ui/core/Chip";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    padding: theme.spacing(1, 1.2),
    fontFamily: theme.typography.fontFamily,
    height: "38px",
    borderRadius: "6px",
    "& .MuiChip-label": {
      maxWidth: 100,
    },
  },
  icon: {
    color: theme.palette.primary.main,
  },
}));

const Chip = (props) => {
  const classes = useStyles();
  const { content, handleDelete } = props;
  return (
    <div data-testid="chip-placeholder">
      {content && (
        <MUIChip
          variant="outlined"
          label={content}
          deleteIcon={<CloseIcon className={classes.icon} />}
          size="small"
          className={classes.root}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

Chip.propTypes = {
  content: PropTypes.string.isRequired,
};

Chip.defaultProps = {
  content: "chip",
};

export default Chip;
