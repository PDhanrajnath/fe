import {Grid, makeStyles, Snackbar} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import JobList from "../../organisms/JobList/JobList";
import Navbar from "../../organisms/Navbar/Navbar";
import { connect } from "react-redux";
import {
  convertServiceToClientJob,
  convertServiceToClientJobs,
} from "../../../state/converter/jobConverter";
import { apis,} from "../../../utils/resources/resources";
import { SavedJobsDispatch } from "../../../utils/utils/utils";
import JobDetails from "../../organisms/JobDetails/JobDetails";
import TopHeader from "../../molecules/TopHeader/TopHeader";
import JobCommuteRoutes from "../../organisms/JobCommuteRoutes";
import {Alert} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
    overflow: "none",
  },
  topHeader: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  findJobs: {
    marginTop: theme.spacing(10),
  },
  right: {
    boxSizing: "border-box",
  },
}));
const SavedJobs = (props) => {
  const classes = useStyles();
  const url = new URL(apis.GET_SAVEDJOBS);
  const [isPrimaryJobList, setPrimaryJobList] = useState(true);
  const [isGreenCommuteClicked, setGreenCommuteClicked] = useState(false);
  const [message, setMessage] = useState("Message");
  const [messageType, setMessageType] = useState("success");
  const [showMessage, setShowMessage] = useState(false);
  const handleSearch = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => props.fetchSavedJobs(convertServiceToClientJobs(res)))
      .catch((e) => console.log(e));
  };
  const jobUrl = new URL(apis.GET_JOBS);
  const onJobCardClick = (obj) => {
    fetch(jobUrl + obj.jobId)
      .then((res) => res.json())
      .then((res) => {
        props.fetchJob(convertServiceToClientJob(res));
        setPrimaryJobList(false);
        setGreenCommuteClicked(false);
      })
      .catch((e) => console.log(e));
  };
 
  const greenCommuteClick = () => {
    setGreenCommuteClicked(true);
  };
  const onBackClick = () => {
    setGreenCommuteClicked(false);
  };
  const reducerSavedJobs = props.savedJobs;
  let anyItemRemoved = false;
  const handleRemoved = (JobId) => {
    const newSavedJobs = reducerSavedJobs.filter((item) => JobId !== item.jobId);
    setMessage("Job removed from saved jobs.");
    props.fetchSavedJobs(newSavedJobs);
    setMessageType("success");
    setPrimaryJobList(true);
    setShowMessage(true);
    anyItemRemoved = true;
  };
  useEffect(() => {
    if(anyItemRemoved === false) {
      handleSearch();
    }    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Grid container className={classes.root} data-testid="saved-jobs">
      <Grid item xs={2}>
        <Navbar />
      </Grid>
      <Grid container item xs={10} className={classes.right}>
        <Grid item xs={12} className={classes.topHeader}>
          <TopHeader
            locationLabel={props.userLocation}
            profileName="Bob Joseph"
          />
        </Grid>
        <Grid item container xs={12}>
          <JobList
            isPrimary={isPrimaryJobList}
            jobs={reducerSavedJobs}
            onSearchCLick={handleSearch}
            onJobCardClick={onJobCardClick}
            showFindJobs={false}
          />
          {isPrimaryJobList ? (
            ""
          ) : isGreenCommuteClicked ? (
            <Grid item> 
              <JobCommuteRoutes
                selectedCommute="metro"
                {...props.draftJob}
                from={props.userLocation}
                to={props.jobLocation}
                commuteTypes={props.metroOptions}
                cabOptions={props.cabOptions}
                onBackClick={onBackClick}
                showFindJobs={false}
                itemsRemoved={ (id) => handleRemoved(id)}
              />
            </Grid>
          ) : (
            <Grid item>
              <JobDetails
                showFindJobs={false}
                onGreenCommuteClick={greenCommuteClick}
                itemsRemoved={ (id) => handleRemoved(id)}
                {...props.draftJob}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
      <Snackbar
          autoHideDuration={3000}
          open={showMessage}
          onClose={()=> {setShowMessage(false);}}
          anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      >
        <Alert elevation={6} severity={messageType} variant="filled">
          {message}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    savedJobs: state.savedJobs,
    draftJob: state.draftJob,
    userLocation: state.userLocation,
    cabOptions: state.cabOptions,
    metroOptions: state.metroOptions,
  };
};

SavedJobsDispatch();

export default connect(mapStateToProps, SavedJobsDispatch)(SavedJobs);
