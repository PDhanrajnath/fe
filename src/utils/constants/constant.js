export const labels = [
  {
    option: "0-10 kms",
    selected: false,
  },
  {
    option: "10-20 kms",
    selected: false,
  },
  {
    option: "20-30 kms",
    selected: false,
  },
  {
    option: "30-40 kms",
    selected: false,
  },
];

export const filterValues = [
  {
    heading: "Distance",
    labels,
  },
  {
    heading: "Date Posted",
    labels: [
      {
        option: "Past 24 hours",
        selected: false,
      },
      {
        option: "Past week",
        selected: false,
      },
      {
        option: "Past month",
        selected: false,
      },
      {
        option: "Anytime",
        selected: false,
      },
    ],
  },
  {
    heading: "Green Commute",
    labels: [
      {
        option: "Yes",
        selected: false,
      },
    ],
  },
  {
    heading: "Job Type",
    labels: [
      {
        option: "Full Time",
        selected: false,
      },
      {
        option: "Internship",
        selected: false,
      },
      {
        option: "Contract",
        selected: false,
      },
      {
        option: "Remote",
        selected: false,
      },
    ],
  },
  {
    heading: "Experience Level",
    labels: [
      {
        option: "Fresher",
        selected: false,
      },
      {
        option: "Mid-level",
        selected: false,
      },
      {
        option: "Director",
        selected: false,
      },
      {
        option: "Executive",
        selected: false,
      },
    ],
  },
  {
    heading: "Transport",
    labels: [
      {
        option: "Metro",
        selected: false,
      },
      {
        option: "Motor cycle",
        selected: false,
      },
      {
        option: "Bus",
        selected: false,
      },
      {
        option: "Car Pooling",
        selected: false,
      },
    ],
  },
];

export const headerInfo = "application/json; charset=UTF-8";
export const jobSavedSuccess = "Job saved for future reference.";
export const jobAlreadyPresent = "Job already present in saved jobs.";
export const jobSavedFailed = "Failed to save job";
export const failedToRemove = "Failed to remove job";

export const points = {
  Hyderabad: [78.4867, 17.3850],
  Mumbai: [72.8777, 19.0760],
  Indore: [75.8577, 22.7196],
  Patna: [85.1376, 25.5941],
  Banglore: [77.5946, 12.9716],
  Delhi: [77.1025, 28.7041],
};