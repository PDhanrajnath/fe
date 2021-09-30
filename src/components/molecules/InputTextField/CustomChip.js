import {Chip, withStyles} from "@material-ui/core";
import React from "react";

const CustomChip = withStyles({
    root: {
        height: '40px',
        borderRadius: '6px'
    },
})((props) => <Chip  data-testid="custom-chip" {...props} />);

export default CustomChip;
