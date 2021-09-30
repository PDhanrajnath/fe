import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CompanyLogo from '../../atoms/CompanyLogo/CompanyLogo';
import CardLabel from '../../atoms/cardLabel/CardLabel';
import Button from '../../atoms/button/Button';
import {makeStyles, Snackbar} from "@material-ui/core";
import { apis } from '../../../utils/resources/resources';
import {Alert} from "@material-ui/lab";
import { headerInfo, jobSavedSuccess, jobAlreadyPresent, jobSavedFailed, failedToRemove } from '../../../utils/constants/constant';

const useStyles = makeStyles({
    buttonsStyle: {
        width: "220px",
        marginTop: "12px",
    },
    columnMargin :{
        marginLeft:"8px",
    },
    root:{
        display: "flex"
    }
});

const JobDetailsHeader = ({ url, alt, jobId, jobTitle, companyName, location, contentDescription, onClickApply, isPrimary, showFindJobs, ...props }) => {
    const classes = useStyles();
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
        <Grid className={classes.root} data-testid="jobDetailsHeader-placeholder">
            <CompanyLogo url={url} alt={alt} ></CompanyLogo>

            <Grid container direction="column" className={classes.columnMargin}>
                <CardLabel label={jobTitle} isPrimary> </CardLabel>
                <CardLabel label={companyName}> </CardLabel>
                <CardLabel label={location}> </CardLabel>
                { isPrimary ?
                <Grid container justify="space-between" className={classes.buttonsStyle} >
                    <Button label={saveOrRemoveButton} type="small" variant="outlined" onClick={onClickSaveOrRemove} />
                    <Button label="Apply" variant="contained" type="small" onClick={onClickApply} />
                </Grid> :
                ""
                }
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

    );
};

JobDetailsHeader.propTypes = {
    url: PropTypes.string,
    alt: PropTypes.string,
    jobTitle: PropTypes.string,
    companyName: PropTypes.string,
    location: PropTypes.string,
    isPrimary: PropTypes.bool,
};

export default JobDetailsHeader;