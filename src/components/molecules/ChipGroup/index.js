import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "../../atoms/Chip";
import { Grid, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { apis } from "../../../utils/resources/resources";
import {
  chipAndFilterGroupDispatch,
  experienceLevel,
  jobType,
  landingPageLocationAndSkillParams,
  // landingPageLocationAndSkillParams,
  maxDistance,
} from "../../../utils/utils/utils";
import { convertServiceToClientJobs } from "../../../state/converter/jobConverter";
import { points } from "../../../utils/constants/constant";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1, 2),
    },
  },
  clearAll: {
    marginTop: theme.spacing(2),
    marginLeft: 50,
    color: theme.palette.secondary.main,
    height: 1,
    textAlign: "center",
    cursor: "pointer",
  },
}));

const ChipGroup = (props) => {
  const classes = useStyles();
  const { dataTestId, Filters } = props;
  const getChips = (objectArray) => {
    const chips = [];
    for (let i = 0; i < objectArray.length; i++) {
      if (objectArray[i].checked === true) {
        chips.push(objectArray[i].label);
      }
    }
    return chips;
  };
  const [localFilters, setLocalFilters] = useState(Filters);
  const [chipState, setChipState] = useState(getChips(localFilters));
  useEffect(() => {
    setChipState(getChips(localFilters));
    setLocalFilters(localFilters);
    // eslint-disable-next-line
  }, [Filters]);
  let params = {};
  const initialJobLocation = [];
  const finalJobLocation = "";
  params = landingPageLocationAndSkillParams(
    params,
    initialJobLocation,
    finalJobLocation,
    props.jobLocation,
    props.skill,
    points
  );
  console.log(params);
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

  const handleDelete = (chipToDelete) => () => {
    const chips = [...chipState];
    const index = chips.indexOf(chipToDelete);
    if (index !== -1) {
      chips.splice(index, 1);
      setChipState(chips);
    }
    let flag = 0;
    for (let i = 0; i < localFilters.length; i++) {
      if (localFilters[i].label === chipToDelete) {
        localFilters[i].checked = false;
      }
      if (localFilters[i].label === "Yes") {
        flag = 1;
      }
    }
    props.getFilters(localFilters);
    setLocalFilters(localFilters);
    if (chipToDelete === "Yes" || flag === 1) {
      params = { ...params, is_green_commute: false };
    } else if (flag === 0) {
      params = { ...params, is_green_commute: true };
    }
    maxDistance(localFilters)
      ? (params = {
          ...params,
          distance: maxDistance(localFilters),
          is_green_commute: props.filters[4].checked,
        })
      : (params = { ...params, is_green_commute: props.filters[4].checked });
    jobType(props.filters)
      ? (params = {
          ...params,
          job_type: jobType(props.filters),
          is_green_commute: props.filters[4].checked,
        })
      : (params = { ...params, is_green_commute: props.filters[4].checked });
    experienceLevel(props.filters)
      ? (params = {
          ...params,
          experience_level: experienceLevel(props.filters),
          is_green_commute: props.filters[4].checked,
        })
      : (params = { ...params, is_green_commute: props.filters[4].checked });
    props.skill[0]
      ? (params = {
          ...params,
          skill: props.skill[0],
          is_green_commute: props.filters[4].checked,
        })
      : (params = { ...params, is_green_commute: props.filters[4].checked });
    handleSearch();
  };
  const clearChips = () => {
    for (let i = 0; i < localFilters.length; i++) {
      localFilters[i].checked = false;
    }
    props.getFilters(localFilters);
    setChipState([]);
  };
  const clearAllChips = () => {
    clearChips();
    props.skill[0]
      ? (params = {
          ...params,
          skill: props.skill[0],
          is_green_commute: false,
        })
      : (params = { ...params, is_green_commute: false });
    handleSearch();
  };
  // eslint-disable-next-line
  const Chips = localFilters.map((object) => {
    if (object.checked === true) {
      if (object.label !== "Yes") {
        return (
          <Chip
            content={object.label}
            handleDelete={handleDelete(object.label)}
          ></Chip>
        );
      } else {
        return (
          <Chip
            content={"Green Commute"}
            handleDelete={handleDelete(object.label)}
          ></Chip>
        );
      }
    }
  });
  return (
    <div data-testid={dataTestId} className={classes.root}>
      <Grid container>
        <Grid item className={classes.chips} xs={10}>
          {Chips}
        </Grid>
        {chipState.length !== 0 && (
          <Grid item xs={2}>
            <Typography onClick={clearAllChips} className={classes.clearAll}>
              clear all
            </Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Filters: state.filters,
    jobLocation: state.jobLocation,
    userLocation: state.userLocation,
    skill: state.skills,
    filters: state.filters,
    draftJob: state.draftJob,
    cabOptions: state.cabOptions,
    metroOptions: state.metroOptions,
  };
};

chipAndFilterGroupDispatch();

export default connect(mapStateToProps, chipAndFilterGroupDispatch)(ChipGroup);
