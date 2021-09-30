import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CompanyLogo from '../../atoms/CompanyLogo/CompanyLogo';
import CardLabel from '../../atoms/cardLabel/CardLabel';
import CommuteRoutes from '../../molecules/CommuteRoutes/CommuteRoutes';
import { makeStyles } from "@material-ui/core";
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';



const useStyles = makeStyles({
    primaryCommRoutes: {
        marginTop: "10px",
    },
    secondaryCommRoutes: {
        alignSelf: "flex-end",
    },
    jobAge: {
        position: 'absolute',
        right: "40px",
        display: "flex",
        justifyContent: "space-between"
    },
    primaryCard: {
        padding: "30px",
        border: "solid 2px #e3f3f6",
        borderRadius: "4px",
        justifyContent: "space-between",
        position: "relative",
        background: "white",
    },
    secondaryCard: {
        padding: "30px",
        border: "solid 2px #e3f3f6",
        borderRadius: "10px",
        justifyContent: "space-between",
        position: "relative",
        background: "white",
    },
    moreIcon: {
        color: "#5f7381",
        margin: "-3px",
        paddingLeft: "24px"
    },
    secondaryJobInfo: {
        // marginLeft: "-40px",
        width: "380px"
    },
    activeCard: {
        border: "solid 2px #5ac568",
        borderRadius: "10px",
        cursor: "pointer",
        "&:hover" : {
            WebkitBoxShadow: ' 0px 0px 5px #5ac568',
            boxShadow: ' 0px 0px 5px #5ac568',
            borderRadius: '10px',
        }
    },
    wholeCard : {
        "&:hover" : {
            WebkitBoxShadow: ' 0px 0px 5px #888888',
            boxShadow: ' 0px 0px 5px #888888',
            borderRadius: '10px',
            cursor: "pointer"
        }
    }
});



const JobCard = ({ isPrimary, active, logoUrl, logoInfo, jobTitle, companyName, location, commuteOptions }) => {
    const classes = useStyles();

    const commRoutesClass = isPrimary ? classes.primaryCommRoutes : "";
    return (
        <div className={active ? classes.activeCard : classes.wholeCard} >
        <Grid container direction={isPrimary ? "column" : "row"} className={isPrimary ? classes.primaryCard : classes.secondaryCard} data-testid="jobCard-placeholder">
            <div className={classes.jobAge}>
                <CardLabel label="2d" />
                <MoreHorizOutlinedIcon className={classes.moreIcon} />
            </div>
            <Grid item>
                <CompanyLogo url={logoUrl} alt={logoInfo} isPrimary={isPrimary} ></CompanyLogo>
            </Grid>
            <Grid item>
                <Grid item container direction="column" justify="space-between" className={` ${isPrimary ? "" : classes.secondaryJobInfo}`}>
                    <Grid item ><CardLabel label={jobTitle} isPrimary /></Grid>
                    <Grid item ><CardLabel label={companyName} /></Grid>
                    <Grid item ><CardLabel label={location} /></Grid>
                </Grid>
            </Grid>
            <Grid item className={isPrimary ? "" : classes.secondaryCommRoutes}>
                <div className={commRoutesClass}>
                    <CommuteRoutes icons={commuteOptions} primary={isPrimary} isJobCard />
                </div>
            </Grid>
        </Grid>
        </div>
    );
};

JobCard.propTypes = {
    isPrimary: PropTypes.bool,
    logoUrl: PropTypes.string,
    lgogInfo: PropTypes.string,
    jobTitle: PropTypes.string,
    companyName: PropTypes.string,
    location: PropTypes.string,
    commuteOptions: PropTypes.array,
};

export default JobCard;