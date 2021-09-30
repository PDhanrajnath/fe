import {
  jobLocation,
  jobSkill,
  userLocation,
  getFilters,
  fetchSavedJobs,
  fetchJob,
  fetchJobs,
  getAllSkills,
} from "../../state/action/action";

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
};

export const StepPageDispatch = (dispatch) => {
  return {
    jobLocation: (data) => dispatch(jobLocation(data)),
    userLocation: (data) => dispatch(userLocation(data)),
    skills: (data) => dispatch(jobSkill(data)),
  };
};

export const chipAndFilterGroupDispatch = (dispatch) => {
  return {
    getFilters: (data) => dispatch(getFilters(data)),
  };
};

export const maxDistance = (filters) => {
  let distArray = [];
  for (let i = 0; i < 4; i++) {
    if (filters[i].checked) {
      distArray = filters[i].label.split("-");
    }
  }
  return (10 + Number(distArray[0])) * 1000;
};

export const jobType = (filters) => {
  let distArray = "";
  for (let i = 9; i <= 12; i++) {
    if (filters[i].checked) {
      distArray = filters[i].label;
    }
  }
  distArray = distArray.replace(" ", "_");
  return distArray.toUpperCase();
};

export const experienceLevel = (filters) => {
  let distArray = "";
  for (let i = 13; i <= 16; i++) {
    if (filters[i].checked) {
      distArray = filters[i].label;
    }
  }
  distArray = distArray.replace("-", "_");
  return distArray.toUpperCase();
};

export const getFilterGroupChecked = (objectArray, text) => {
  for (let i = 0; i < objectArray.length; i++) {
    if (objectArray[i].label === text) {
      objectArray[i].checked = !objectArray[i].checked;
    }
  }
  return objectArray;
};
export const getFilterGroupClearAll = (objectArray) => {
  for (let i = 0; i < objectArray.length; i++) {
    objectArray[i].checked = false;
  }
  return objectArray;
};

export const SavedJobsDispatch = (dispatch) => {
  return {
    fetchSavedJobs: (data) => dispatch(fetchSavedJobs(data)),
    fetchJob: (data) => dispatch(fetchJob(data)),
  };
};

export const LandingPageDispatch = (dispatch) => {
  return {
    fetchJobs: (data) => dispatch(fetchJobs(data)),
    fetchJob: (data) => dispatch(fetchJob(data)),
    getAllSkills: (data) => dispatch(getAllSkills(data)),
  };
};

export const FindJobDispatch = (dispatch) => {
  return {
    location: (data) => dispatch(jobLocation(data)),
    skills: (data) => dispatch(jobSkill(data)),
  };
};

export const StepDispatch = (dispatch) => {
  return {
    getAllSkills: (data) => dispatch(getAllSkills(data)),
  };
};


export const landingPageLocationAndSkillParams = (
  params,
  initialJobLocation,
  finalJobLocation,
  jobLocation,
  skill,
  points
) => {
  if (jobLocation !== null) {
    if (jobLocation.length !== 0) {
      const selectedLocation = points[jobLocation.split(",")[0]];
        return {
          ...params,
          lon: selectedLocation[0],
          lat: selectedLocation[1],
        };
    }
  } else {
    return {};
  }
};

export const landingPageLocationAndSkillStr2 = (
  initialJobLocation,
  finalJobLocation,
  jobLocation
) => {
  if (jobLocation !== null) {
    if (jobLocation.length !== 0) {
      return jobLocation.split(",")[0];
    }
    return "";
  }
  return "";
};
