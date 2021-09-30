export const convertToSentenceCase = (skill) => {
  if (skill.includes("_")) {
    const sentence = skill.toLowerCase().split("_");
    for (let i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    if (sentence[0].length < 3) {
        sentence[0] = sentence[0].toUpperCase();
    } 
    return sentence.join(" ");
  }
  return skill;
};

export const convertServiceToClientJobs = (jobs) => {
  return jobs.map((job) => ({
    jobId: job.id,
    jobTitle: job.title,
    logoUrl:
      job.company_logo_url ||
      "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
    logoInfo: job.name,
    companyName: job.name,
    commuteOptions: [
      { type: "metro" },
      { type: "bus" },
      { type: "car" },
      { type: "bike" },
    ],
    location: job.address,
  }));
};

export const convertServiceToClientJob = (job) => {
  return {
    jobId: job.id,
    jobTitle: job.title,
    url:
      job.company_logo_url ||
      "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
    alt: job.name,
    companyName: job.name,
    commuteOptions: [
      { type: "metro" },
      { type: "bus" },
      { type: "car" },
      { type: "bike" },
    ],
    location: job.address,
    contentDescription: [
      {
        heading: "Description",
        description: [job.description],
      },
      {
        heading: "What it takes",
        description: job.requirements,
      },
    ],
  };
};
