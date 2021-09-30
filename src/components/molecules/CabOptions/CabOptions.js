import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    primary: {
        fontSize: "14px",
        color: "#19293b",
    },
    secondary: {
        fontSize: "14px",
        color: "#5f7381",
    },
    theme: {
        fontSize: "14px",
        color: theme.palette.primary.main,
        fontWeight: "600",
    },
    img: {
        marginRight: "10px",
        height: "42px",
        width: "42px",
    },
    gird: {
        minWidth: "800px"
    }
}));

const CabOptions = ({options}) => {
    const classes = useStyles();

    const cabs = options.map((obj) => {
        return (
            <Grid container direction="row" alignItems="center" key={obj.type}>
                    <img className={classes.img} src={obj.url} alt={obj.type}></img>
                <Grid item xs={3} container direction="column" justify="center">
                    <Typography variant="h4" className={classes.primary}>{obj.type}</Typography>
                    <Typography variant="h4" className={classes.secondary}>Approx {obj.value}</Typography>
                </Grid>
                    <Typography variant="h4" className={classes.theme}>Book now</Typography>
            </Grid>
        );
    });

    return (
        <Grid container direction="column" justify="center" data-testid="cabOptions-placeholder">
            {cabs}
        </Grid>
    );
};

CabOptions.propTypes = {
    options: PropTypes.array,

};

export default CabOptions;