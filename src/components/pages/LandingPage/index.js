import { Grid, makeStyles, withStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import TopHeader from "../../molecules/TopHeader/TopHeader";
import Navbar from "../../organisms/Navbar/Navbar";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import JobList from "../../organisms/JobList/JobList";
import { connect } from "react-redux";
import {
  convertServiceToClientJobs,
  convertServiceToClientJob,
} from "../../../state/converter/jobConverter";
import JobDetails from "../../organisms/JobDetails/JobDetails";
import { apis } from "../../../utils/resources/resources";
import { experienceLevel, jobType, LandingPageDispatch, landingPageLocationAndSkillParams, landingPageLocationAndSkillStr2, maxDistance } from "../../../utils/utils/utils";
import JobCommuteRoutes from "../../organisms/JobCommuteRoutes";
import { points } from "../../../utils/constants/constant";

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

const LandingPage = (props) => {
  const classes = useStyles();
  const reducerJobs = props.jobs;
  const skillsUrl = apis.GET_SKILLS;
  const skillsURL = new URL(skillsUrl);
  const handleSkill = () => {
    fetch(skillsURL)
      .then((res) => res.json())
      .then((res) => props.getAllSkills(res))
      .catch((e) => console.log(e));
  };
  let params = {};
  const initialJobLocation = [];
  let finalJobLocation = "";
  params = landingPageLocationAndSkillParams(params, initialJobLocation, finalJobLocation, props.jobLocation, props.skill, points);
  finalJobLocation = landingPageLocationAndSkillStr2(initialJobLocation, finalJobLocation, props.jobLocation);
  if (jobType(props.filters)) {
    params = { ...params, job_type: jobType(props.filters) };
  }

  if (experienceLevel(props.filters)) {
    params = { ...params, experience_level: experienceLevel(props.filters) };
  }
  if (maxDistance(props.filters)) {
    params = { ...params, distance: maxDistance(props.filters) };
  }
  if (props.skill.length) {
    params = { ...params, skill: props.skill };
  }
  params = { ...params, is_green_commute: props.filters[4].checked };
  const fetchJobsUrl = new URL(apis.GET_JOBS);
  const handleSearch = () => {
    Object.keys(params).forEach((key) =>
      fetchJobsUrl.searchParams.append(key, params[key])
    );
    fetch(fetchJobsUrl)
      .then((res) => res.json())
      .then((res) => props.fetchJobs(convertServiceToClientJobs(res)))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    handleSearch();
    handleSkill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchJobUrl = new URL(apis.GET_JOBS);
  const [isPrimaryJobList, setPrimaryJobList] = useState(true);
  const [isGreenCommuteClicked, setGreenCommuteClicked] = useState(false);
  const onJobCardClick = (obj) => {
    fetch(fetchJobUrl + obj.jobId)
      .then((res) => res.json())
      .then((res) => {
        props.fetchJob(convertServiceToClientJob(res));
        setPrimaryJobList(false);
        setGreenCommuteClicked(false);
      })
      .catch((e) => console.log(e));
  };
  const onBackClick = () => {
    setGreenCommuteClicked(false);
  };

  const greenCommuteClick = () => {
    setGreenCommuteClicked(true);
  };
  return (
    <Grid container className={classes.root} data-testid="landing-page">
      <Grid item xs={2}>
        <Navbar />
      </Grid>
      <Grid item container xs={10} className={classes.right}>
        <Grid item xs={12} className={classes.topHeader}>
          <TopHeader
            locationLabel={props.userLocation}
            profileName="Bob Joseph"
          />
        </Grid>
        <Grid container item xs={12}>
          <JobList
            isPrimary={isPrimaryJobList}
            jobs={reducerJobs}
            placeholder1="Search skills"
            options1={props.searchOptions1}
            icon1={<CustomWorkOutlined fontSize={"small"} />}
            placeholder2="Location"
            options2={props.searchOptions2}
            icon2={<CustomRoomOutlinedIcon fontSize={"small"} />}
            onSearchCLick={handleSearch}
            onJobCardClick={onJobCardClick}
            skill={props.skill[0]}
            jobLocation={finalJobLocation}
            showFindJobs={true}
            fetchJobs={props.fetchJobs}
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
                showFindJobs={true}
              />
            </Grid>
          ) : (
            <Grid item>
              <JobDetails
                onGreenCommuteClick={greenCommuteClick}
                {...props.draftJob}
                showFindJobs={true}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
const CustomWorkOutlined = withStyles({
  root: {
    color: "#5f7381",
  },
})((props) => <WorkOutlineIcon {...props} />);

const CustomRoomOutlinedIcon = withStyles({
  root: {
    color: "#5f7381",
  },
})((props) => <RoomOutlinedIcon {...props} />);

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
    searchOptions1: state.searchOptions1,
    searchOptions2: state.searchOptions2,
    jobLocation: state.jobLocation,
    userLocation: state.userLocation,
    skill: state.skills,
    filters: state.filters,
    draftJob: state.draftJob,
    cabOptions: state.cabOptions,
    metroOptions: state.metroOptions,
  };
};

LandingPageDispatch();

export default connect(mapStateToProps, LandingPageDispatch)(LandingPage);