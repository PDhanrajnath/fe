import React from "react";
import { Checkbox, withStyles } from "@material-ui/core";

const FilterCheckbox = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    "&$checked": {
      color: theme.palette.primary.main,
    },
  },
  checked: {},
}))((props) => (
  <Checkbox data-testid="filter-checkbox" color="default" {...props} />
));

export default FilterCheckbox;
