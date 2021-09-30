const { BASE_URL } = window.env || {BASE_URL : 'http://bc15.dev-apps.io:32002/'};

export const apis = {
  GET_SKILLS: `${BASE_URL}/api/skills`,
  GET_JOBS: `${BASE_URL}/api/jobs/`,
  GET_SAVEDJOBS: `${BASE_URL}/api/saved-jobs/`,
};
