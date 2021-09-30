import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';
import PropTypes from "prop-types";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import DirectionsWalk from "@material-ui/icons/DirectionsWalk";
import TrainOutlinedIcon from "@material-ui/icons/TrainOutlined";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '20px',
        width: '20px',
        color: '#5f7381',
        marginTop: 3,
    },
    transitType: {
        display: 'flex',
        alignItems: 'flex-start',
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5)
    },
    descDiv:{
        paddingTop: theme.spacing(1),
        marginLeft: theme.spacing(0.5)
    },
    lateStatus: {
        color: '#e2311d',
        marginLeft: theme.spacing(1)
    },
    onTimeStatus:{
        color: '#6bea9a',
        marginLeft: theme.spacing(1)
    },
    transitDesc:{
        marginBottom: theme.spacing(1)
    }
}));

const TransitType = ({type, description, fare, time, lateStatus, isLate}) => {
    const classes = useStyles();

    return (
        <div
            data-testid="transit-type"
            className={classes.transitType}
        >
            <div>
                {
                    type === "metro" ?
                        <TrainOutlinedIcon className={classes.root} /> :
                        type === "bus" ?
                            <DirectionsBusIcon className={classes.root} /> :
                            <DirectionsWalk className={classes.root} />
                }
            </div>
            <div className={classes.descDiv}>
                <Typography variant={'subtitle2'} className={classes.transitDesc}>
                    {description}
                    {   !!time && type === 'walk' ?
                        <span> {time}</span>
                        : isLate ?
                            <span className={classes.lateStatus}>{lateStatus}</span>
                            : <span className={classes.onTimeStatus}>On time</span>
                    }
                </Typography>
                {
                    !!fare && !!time && <Typography variant={'subtitle2'}>{fare} &bull; {time}</Typography>
                }
            </div>
        </div>
    );
};


TransitType.propTypes = {
    type: PropTypes.string,
    fare: PropTypes.string,
    time: PropTypes.string,
    description: PropTypes.string.isRequired,
    lateStatus: PropTypes.string,
    isLate: PropTypes.bool,
};

export default TransitType;