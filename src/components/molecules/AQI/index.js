import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Counter from '../../atoms/Counter';
import Label from '../../atoms/Label';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        textAlign: 'center',
        backgroundColor: "#e7fce0",
    },
    imageItem: {
        // marginTop: theme.spacing(-10),
        marginBottom: theme.spacing(7),
    },
    label : {
        // width: "490px",
    },
    image: {
        height: "auto",
    },
}));

const AQI = (props) => {
    const classes = useStyles();
    const {src, alt, totalJobs, city, size, text, dataTestId } = props;
    return (
        <Grid container className={classes.root} direction='column' justify='center'
        alignItems='center' spacing={2} data-testid={dataTestId}>
            <Grid item className={classes.imageItem}>
                <img src={src} alt={alt} className={classes.image} />
            </Grid>
                <Grid item>
                    <Counter totalJobs={totalJobs} city={city}></Counter>
                </Grid>
            <Grid item className={classes.label}>
                <Label size={size} text={text} ></Label>
            </Grid>
        </Grid>
    );
};

export default AQI;