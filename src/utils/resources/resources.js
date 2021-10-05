const { BASE_URL } = window.env || {BASE_URL : 'http://localhost:8080'};

export const apis = {
  GET_SKILLS: `${BASE_URL}/api/skills`,
  GET_JOBS: `${BASE_URL}/api/jobs/`,
  GET_SAVEDJOBS: `${BASE_URL}/api/saved-jobs/`,
};
