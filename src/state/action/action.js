import { JOBS_RECEIVED } from "./actionTypes";
import { ONCHANGE_JOBLOCATION } from "./actionTypes";
import { ONCHANGE_USERLOCATION } from "./actionTypes";
import { ONCHANGE_SKILLS } from "./actionTypes";
import { ONCHANGE_ALLSKILLS } from "./actionTypes";
import { GET_FILTERS } from "./actionTypes";
import { JOB_RECEIVED } from "./actionTypes";
import { SAVEDJOBS_RECEIVED } from "./actionTypes";

export const fetchJobs = (jobs) => {
  return {
    type: JOBS_RECEIVED,
    payload: jobs,
  };
};

export const jobLocation = (location) => {
  return {
    type: ONCHANGE_JOBLOCATION,
    payload: location,
  };
};

export const userLocation = (location) => {
  return {
    type: ONCHANGE_USERLOCATION,
    payload: location,
  };
};

export const jobSkill = (skill) => {
  return {
    type: ONCHANGE_SKILLS,
    payload: skill,
  };
};

export const getAllSkills = (skills) => {
  return {
    type: ONCHANGE_ALLSKILLS,
    payload: skills,
  };
};

export const getFilters = (filters) => {
  return {
    type: GET_FILTERS,
    payload: filters,
  };
};

export const fetchJob = (job) => {
  return {
    type: JOB_RECEIVED,
    payload: job,
  };
};

export const fetchSavedJobs = (savedJobs) => {
  return {
    type: SAVEDJOBS_RECEIVED,
    payload: savedJobs,
  };
};

export default fetchJobs;
