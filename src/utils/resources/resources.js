const { BASE_URL } = window.env || {BASE_URL : 'http://bc15.dev-apps.io:32002'};
const temp = window.location.origin;

export const apis = {
  GET_SKILLS: `${temp}/api/skills`,
  GET_JOBS: `${temp}/api/jobs/`,
  GET_SAVEDJOBS: `${temp}/api/saved-jobs/`,
};
