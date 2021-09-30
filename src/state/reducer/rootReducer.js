import {
  JOBS_RECEIVED,
  ONCHANGE_SKILLS,
  SAVEDJOBS_RECEIVED,
  ONCHANGE_ALLSKILLS,
  ONCHANGE_JOBLOCATION,
  ONCHANGE_USERLOCATION,
  JOB_RECEIVED,
  GET_FILTERS,
} from "../action/actionTypes";

const initState = {
  jobs: [],
  searchOptions2: [
    "Hyderabad",
    "Indore",
    "Mumbai",
    "Patna",
    "Banglore",
    "Delhi",
  ],
  searchOptions1: [],
  userLocation: "",
  jobLocation: "",
  skills: [],
  draftJob: {},
  savedJobs: [],
  cabOptions: [
    {
      type: "OLA",
      value: "40",
      url:
        "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1459446250/xx0u5xwwzygivm67ogsk.jpg",
    },
    {
      type: "UBER",
      value: "40",
      url:
        "https://semaine-production.s3.amazonaws.com/products/product/image/6827/large_Uber-app.jpg",
    },
    {
      type: "Rapido",
      value: "40",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOLJJfUAbhh1JVtRLgNCexBH9_cC2L3NvqA&usqp=CAU",
    },
  ],
  metroOptions: [
    {
      type: "bus",
      fare: "15$",
      time: "20 mins",
      description: "Catch a bus 38X at 3.42 PM to Secunderabad bus stand.",
      lateStatus: "2 mins",
      isLate: true,
    },
    {
      type: "walk",
      time: "5 mins",
      description: "Head north on St. Johns road.",
    },
    {
      type: "metro",
      fare: "56$",
      time: "38 mins",
      description: "Catch a blue line metro towards Raidurg.",
      isLate: false,
    },
  ],
  filters: [
    { label: "0-10 kms", checked: false },
    { label: "10-20 kms", checked: false },
    { label: "20-30 kms", checked: false },
    { label: "30-40 kms", checked: false },
    { label: "Yes", checked: false },
    { label: "Past 24 hours", checked: false },
    { label: "Past week", checked: false },
    { label: "Past month", checked: false },
    { label: "Anytime", checked: false },
    { label: "Full Time", checked: false },
    { label: "Internship", checked: false },
    { label: "Contract", checked: false },
    { label: "Remote", checked: false },
    { label: "Fresher", checked: false },
    { label: "Mid-level", checked: false },
    { label: "Director", checked: false },
    { label: "Executive", checked: false },
    { label: "Metro", checked: false },
    { label: "Motor cycle", checked: false },
    { label: "Bus", checked: false },
    { label: "Car Pooling", checked: false },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case JOBS_RECEIVED:
      return {
        ...state,
        jobs: action.payload,
      };
    case ONCHANGE_JOBLOCATION:
      return {
        ...state,
        jobLocation: action.payload,
      };
    case ONCHANGE_USERLOCATION:
      return {
        ...state,
        userLocation: action.payload,
      };
    case ONCHANGE_SKILLS:
      return {
        ...state,
        skills: action.payload,
      };
    case ONCHANGE_ALLSKILLS:
      return {
        ...state,
        searchOptions1: action.payload,
      };
    case JOB_RECEIVED:
      return {
        ...state,
        draftJob: action.payload,
      };
    case SAVEDJOBS_RECEIVED:
      return {
        ...state,
        savedJobs: action.payload,
      };
    case GET_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
