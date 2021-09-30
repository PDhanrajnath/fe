import { Divider, Grid, Paper } from '@material-ui/core';
import React, {useState} from 'react';
import JobDetailsHeader from '../../molecules/JobDetailsHeader/JobDetailsHeader';
import {makeStyles, Snackbar} from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";
import CommuteRoutesDescription from '../CommuteRoutesDescription/CommuteRoutesDescription';
import CommuteOptions from '../CommuteOptions/CommuteOptions';
import Button from '../../atoms/button/Button';
import {Alert} from "@material-ui/lab";
import { apis } from '../../../utils/resources/resources';
import { headerInfo, jobSavedSuccess, jobAlreadyPresent, jobSavedFailed, failedToRemove } from '../../../utils/constants/constant';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '390px',
    },
    divider: {
        marginTop: '30px',
        marginLeft: 15,
        marginBottom: '30px',
        width: 360,
    },
    backIcon: {
        color: theme.palette.secondary.main,
        paddingRight: theme.spacing(1),
        marginTop: -3.5,
        cursor: 'pointer'
    },
    buttonLabel: {
        fontFamily: theme.typography.fontFamily,
        height: theme.spacing(2),
        fontWeight: '500',
        marginTop: 10,
    },
    JobCommuteRoutes: {
        marginTop: 15,
        marginLeft: 25,
    },
    CommuteOptions: {
        padding: 10,
        marginLeft: 10,
    },
    BackButton: {
        marginTop: -6,
        marginLeft: 25,
    },
    JobHeader: {
        marginTop: 30,
        marginLeft: 25,
        marginBottom: -10,
    },
    Paper: {
        width: 390,
        border: 0,
        borderTop: "solid 1px #e3f3f6",
        height: "calc(100vh - 73px)",
        overflowY: "scroll",
        overflowX: "hidden"
    },
    buttonsStyle: {
        width: "390px",
        display: "flex",
        marginTop: theme.spacing(4),
        marginBottom: 25,
    },
    LastDivider: {
        width: 390,
        marginTop: 10,
        marginBottom: 10,
        color: "#e3f3f6"
    }
}));

const JobCommuteRoutes = (props) => {
    const classes = useStyles();
    const { url, alt, jobTitle, companyName, location, from, to, onBackClick,
        onClickApply, jobId, commuteTypes, cabOptions, showFindJobs } = props;
    const saveOrRemoveButton = showFindJobs ? "Save" : "Remove";
    const [message, setMessage] = useState("Message");
    const jobsUrl = new URL(apis.GET_SAVEDJOBS + jobId);
    const [messageType, setMessageType] = useState("success");
    const savedJobsUrl = new URL(apis.GET_SAVEDJOBS + jobId);
    const [showMessage, setShowMessage] = useState(false);
    const onClickSaveOrRemove = () => {
        if(saveOrRemoveButton === "Save") {
            fetch(jobsUrl, { 
                method: 'POST', 
                headers: {
                    "Content-type": headerInfo
                } 
            }) 
            .then((res) => {
                if (res.status === 200){
                    setMessage(jobSavedSuccess);
                    setMessageType("success");
                } else if (res.status === 409){
                    setMessageType("info");
                    setMessage(jobAlreadyPresent);
                } else {
                    setMessage(jobSavedFailed);
                    setMessageType("error");
                }
                setShowMessage(true);
            });
        }
        else {
            fetch(savedJobsUrl, {
            method: 'DELETE'})
            .then(res => {
                if (res.status === 200){
                    props.itemsRemoved(jobId);
                } else {
                    setMessage(failedToRemove);
                    setMessageType("error");
                    setShowMessage(true);
                }
                setShowMessage(true);
            });

        }
    };
    return (
        <div data-testid="job-commute-routes">
            <Paper className={classes.Paper} elevation={0} variant="outlined" square>
                <Grid container direction="column" className={classes.root}>
                    <Grid item className={classes.JobHeader}>
                        <JobDetailsHeader
                            url={url}
                            alt={alt}
                            jobTitle={jobTitle}
                            location={location}
                            companyName={companyName}
                        />
                    </Grid>
                    <Grid item>
                        <Divider variant="middle" className={classes.divider}></Divider>
                    </Grid>
                    <Grid container direction="row" className={classes.BackButton}>
                        <Grid item>
                            <ArrowBack className={classes.backIcon} onClick={onBackClick}/>
                        </Grid>
                        <Grid item>
                            <span className={classes.buttonLabel}>Commute Routes</span>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.JobCommuteRoutes}>
                        <CommuteRoutesDescription from={from} to={to} />
                    </Grid>
                    <Grid item>
                        <Divider variant="middle" className={classes.divider}></Divider>
                    </Grid>
                    <Grid item className={classes.CommuteOptions}>
                        <CommuteOptions commuteTypes={commuteTypes} cabOptions={cabOptions} selectedCommute="metro" />
                    </Grid>
                    <Grid item>
                        <Divider className={classes.LastDivider}></Divider>
                    </Grid>
                    <Grid item>
                        <Grid container justify="space-around" alignItems="center" className={classes.buttonsStyle} >
                            <Button label={saveOrRemoveButton} type="medium2" onClick={onClickSaveOrRemove} />
                            <Button label="Apply" variant="contained" type="medium2" onClick={onClickApply} />
                        </Grid>
                    </Grid>
                    <Snackbar
                        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                        open={showMessage}
                        autoHideDuration={3000}
                        onClose={()=> {setShowMessage(false);}}
                    >
                    <Alert severity={messageType} elevation={6} variant="filled">
                        {message}
                    </Alert>
                    </Snackbar>
                </Grid>
            </Paper>
        </div>
    );
};

export default JobCommuteRoutes;