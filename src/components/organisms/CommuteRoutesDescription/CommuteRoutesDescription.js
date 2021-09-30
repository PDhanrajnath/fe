import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const useStyles = makeStyles({
    container: {
        maxWidth: "330px",
        height: "50px",
        margin: "5px 0px",
        position: "relative",
        borderRadius: "10px",
        background: "#e3f3f6",
    },
    location: {
        display: "flex",
        transform: "translateY(-50%)",
        position: "absolute",
        top: "50%",
    },
    font: {
        color: "#19293b",
        fontSize: "14px"
    },
    icon: {
        marginTop: "-3px",
        marginLeft: "8px",
        color: "#324552",
    },
    typoMargin: {
        marginLeft: "10px",
    },
    closeIcon: {
        position: "relative",
        right:"-20px",
    }

});

const CommuteRoutesDescription = ({ from, to }) => {
    const classes = useStyles();

    return (
        <div data-testid="commuteRoutesDescription-placeholder">
            <img src="https://i.stack.imgur.com/8kOXQ.jpg" alt="Commute Map" width="330px" height="135px"></img>
            <div className={classes.container} >
                <div className={classes.location}>
                    <FiberManualRecordIcon className={classes.icon} />
                    <Typography variant="h4" className={`${classes.font} ${classes.typoMargin}`}> {from||"Hyderabad, Telangana, India"} </Typography>
                    <CloseOutlinedIcon className={`${classes.icon} ${classes.closeIcon}`}/>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.location}>
                    <RoomOutlinedIcon className={classes.icon} />
                    <Typography variant="h4" className={`${classes.font} ${classes.typoMargin}`}> {to||"Hyderabad, Telangana, India"} </Typography>
                </div>
            </div>
        </div >

    );
};

CommuteRoutesDescription.propTypes = {
    from: PropTypes.string,
    to: PropTypes.string,
};

export default CommuteRoutesDescription;