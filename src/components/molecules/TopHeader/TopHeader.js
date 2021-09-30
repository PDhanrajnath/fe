import React from 'react';
import PropTypes from 'prop-types';
import { Location } from '../../atoms/Location/Location';
import { Avatar, makeStyles } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        color: "#9bbdcb",
        width: "20px",
        height: "20px",
        margin: "10px",
    },
    right: {
        textAlign: "right",
        paddingRight: "100px",
    },
    label: {
        fontSize: "16px",
        paddingLeft: "10px",
        position: "relative",
        top: "10px",
    },
    avatarMargin: {
        marginLeft: "10px",
    },
    location: {
        paddingLeft: '80px',
    }
});

const TopHeader = ({ locationLabel, profileName }) => {
    
    const classes = useStyles();

    return (

        <Grid container alignItems="center" justify="space-between" data-testid="topheader-placeholder" >
            <Grid item xs={3} className={classes.location} >
                <Location label={locationLabel||"Hyderabad, Telangana, India"} />
            </Grid>

            <Grid item container xs={3} >
                <MessageOutlinedIcon className={classes.root} />
                <NotificationsNoneOutlinedIcon className={classes.root} />
                <Avatar className={classes.avatarMargin} src={'/assets/avatar_profile.jpeg'}>{profileName.charAt(0)}</Avatar>
                <Typography variant="h4" className={classes.label} >{profileName}</Typography>
                <ExpandMoreIcon className={classes.root} />
            </Grid>
        </Grid>
    );
};

TopHeader.propTypes = {
    locationLabel: PropTypes.string,
    profileName: PropTypes.string,
};

export default TopHeader;