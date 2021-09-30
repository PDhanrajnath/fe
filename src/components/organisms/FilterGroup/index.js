import React, { useState, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import FilterType from "../FilterType";
import Button from "../../atoms/button/Button";
import { connect } from "react-redux";
import {
  chipAndFilterGroupDispatch,
  getFilterGroupChecked,
  getFilterGroupClearAll,
  landingPageLocationAndSkillParams,
} from "../../../utils/utils/utils";
import { apis } from "../../../utils/resources/resources";
import { convertServiceToClientJobs } from "../../../state/converter/jobConverter";
import { points } from "../../../utils/constants/constant";

const useStyles = makeStyles((theme) => ({
  closeIcon: {
    color: theme.palette.secondary.main,
    textAlign: "right",
    paddingTop: 10,
    paddingRight: 10,
    marginBottom: -10,
  },
  filterType: {
    marginBottom: 40,
  },
  closeIconSize: {
    fontSize: 20,
    marginRight: -20,
  },
  paperStyle: {
    width: 580,
    borderRadius: 10,
    border: "none",
  },
  filterTypes: {
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: 50,
  },
  buttons: {
    marginLeft: -35,
    marginBottom: 20,
  },
}));

const FilterGroup = (props) => {
  const { filterValues } = props;
  const classes = useStyles();
  const [filters, setFilters] = useState(props.Filters);
  const handleChange = (checkValue, label) => {
    const jobFilters = [...filters];
    const arrayOfJobFilters = getFilterGroupChecked(jobFilters, label);
    setFilters(arrayOfJobFilters);
  };

  const clearAllFilters = () => {
    const jobFilters = [...filters];
    const arrayOfJobFilters = getFilterGroupClearAll(jobFilters);
    setFilters(arrayOfJobFilters);
  };

  const FilterTypes = filterValues.map((input) => {
    return (
      <Grid item xs={4} className={classes.filterType}>
        <FilterType
          heading={input.heading}
          labels={input.labels}
          handleChange={handleChange}
          filters={props.Filters}
        />
      </Grid>
    );
  });
  const maxDistance = () => {
    let distArray = [];
    for (let i = 0; i < 4; i++) {
      if (props.Filters[i].checked) {
        distArray = props.Filters[i].label.split("-");
      }
    }
    return (10 + Number(distArray[0])) * 1000;
  };
  const jobType = () => {
    let distArray = "";
    for (let i = 9; i <= 12; i++) {
      if (props.Filters[i].checked) {
        distArray = props.Filters[i].label;
      }
    }
    distArray = distArray.replace(" ", "_");
    return distArray.toUpperCase();
  };
  const experienceLevel = () => {
    let distArray = "";
    for (let i = 13; i <= 16; i++) {
      if (props.Filters[i].checked) {
        distArray = props.Filters[i].label;
      }
    }
    distArray = distArray.replace("-", "_");
    return distArray.toUpperCase();
  };
  let params = {};
  const initialJobLocation = [];
  const finalJobLocation = "";
  const parameters = landingPageLocationAndSkillParams(
    params,
    initialJobLocation,
    finalJobLocation,
    props.jobLocation,
    props.skill,
    points
  );
  params = {...parameters};
  if (maxDistance()) {
    params = { ...params, distance: maxDistance() };
  }
  if (jobType()) {
    params = { ...params, job_type: jobType() };
  }

  if (experienceLevel()) {
    params = { ...params, experience_level: experienceLevel() };
  }
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

  const ApplyFilter = () => {
    props.getFilters(filters);
    props.handleClose();
    params.lon
      ? (params = {
          ...params,
          lon: params.lon,
          lat: params.lat,
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

  const ClearFilter = () => {
    clearAllFilters();
    props.handleClose();
    props.getFilters(filters);
    params.lon
      ? (params = { lon: params.lon, lat: params.lat, is_green_commute: false })
      : (params = { is_green_commute: false });
      props.skill[0]
      ? (params = { ...params, skill: props.skill[0], is_green_commute: false })
      : (params = { ...params, is_green_commute: false });
    handleSearch();
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Paper
      variant="outlined"
      className={classes.paperStyle}
      data-testid="filter-group"
    >
      <div className={classes.closeIcon}>
        <CloseIcon
          className={classes.closeIconSize}
          onClick={props.handleListItemClick}
        ></CloseIcon>
      </div>
      <Grid
        container
        className={classes.filterTypes}
        direction="row"
        spacing={4}
      >
        {FilterTypes}
      </Grid>
      <Grid
        container
        justify="flex-end"
        spacing={3}
        className={classes.buttons}
      >
        <Grid item>
          <Button label="Clear all" type="small" onClick={ClearFilter}></Button>
        </Grid>
        <Grid item>
          <Button
            label="Apply"
            onClick={ApplyFilter}
            type="small"
            variant="contained"
          ></Button>
        </Grid>
      </Grid>
    </Paper>
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

export default connect(
  mapStateToProps,
  chipAndFilterGroupDispatch
)(FilterGroup);
