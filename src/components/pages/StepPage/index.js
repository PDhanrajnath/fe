import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import AQI from "../../molecules/AQI";
import Step from "../../organisms/Step/Step";
import { connect } from "react-redux";
import { getRandomInt, StepPageDispatch } from "../../../utils/utils/utils";

const StepPage = (props) => {
  const images = ["assets/one.png", "assets/two.png", "assets/three.png"];
  const texts = [
    "Enter location to know Time Air Quality Index(AQI)",
    "Real- Time Air Quality Index(AQI) in this location",
    "Enter your skills to know how many jobs are in this location",
    "Jobs found in this location",
  ];
  const alts = ["image 1", "image 2", "image 3"];
  const [page, setPage] = useState(1);
  const [text, setText] = useState(texts[0]);
  const [city, setCity] = useState("");
  const [userCity, setuserCity] = useState("");
  const [jobCity, setjobCity] = useState("");
  const [aqi, setAqi] = useState("");
  const [userCityAqi, setuserCityAqi] = useState("");
  const [jobCityAqi, setjobCityAqi] = useState("");
  const [jobsInLocation, setjobsInLocation] = useState("");
  const [size, setSize] = useState("large");
  const nextPath = (path) => {
    props.history.push(path);
  };
  const onClickNext = () => {
    if (page === 1) {
      if (props.UserLocation) {
        setCity("");
        setAqi(jobCityAqi);
        setCity(jobCity);
        setPage(2);
        jobCityAqi.length !== 0 ? setSize("small") : setSize("large");
        jobCityAqi.length !== 0 ? setText(texts[1]) : setText(texts[0]);
      } else {
        alert("please enter the location");
      }
    } else if (page === 2) {
      if (props.JobLocation) {
        setPage(3);
        setCity("");
        setAqi(jobsInLocation);
        jobsInLocation.length !== 0 ? setSize("small") : setSize("large");
        jobsInLocation.length !== 0 ? setText(texts[1]) : setText(texts[0]);
      } else {
        alert("please enter the location");
      }
    }
  };
  const onClickBack = () => {
    if (page === 2) {
      setPage(1);
      setAqi(userCityAqi);
      setCity(userCity);
      userCityAqi.length !== 0 ? setSize("small") : setSize("large");
      userCityAqi.length !== 0 ? setText(texts[1]) : setText(texts[0]);
    } else {
      setPage(2);
      setAqi(jobCityAqi);
      setCity(jobCity);
      jobCityAqi.length !== 0 ? setSize("small") : setSize("large");
      jobCityAqi.length !== 0 ? setText(texts[1]) : setText(texts[0]);
    }
  };
  const handleLocationChange = (e, v) => {
    if (page === 1) {
      const valueOfAqi = getRandomInt(600, 1000);
      setSize("small");
      setText(texts[1]);
      const str = v;
      props.userLocation(str);
      let res = "";
      if (str) {
        res = str.split(",");
      }
      setCity(res[0]);
      setuserCity(res[0]);
      if (res) {
        setAqi(valueOfAqi);
        setuserCityAqi(valueOfAqi);
      } else {
        setAqi("");
        setuserCityAqi("");
      }
    } else if (page === 2) {
      const valueOfAqi = getRandomInt(600, 1000);
      const str = v;
      let res = "";
      if (str) {
        res = str.split(",");
      }
      props.jobLocation(str);
      setCity(res[0]);
      setjobCity(res[0]);
      setSize("small");
      setText(texts[1]);
      if (res) {
        setAqi(valueOfAqi);
        setjobCityAqi(valueOfAqi);
      } else {
        setAqi("");
        setjobCityAqi("");
      }
    } else {
      const valueOfAqi = getRandomInt(600, 1000);
      props.skills(v);
      setSize("small");
      setText(texts[3]);
      if (v.length) {
        setAqi(valueOfAqi);
        setjobsInLocation(valueOfAqi);
      } else {
        setAqi("");
        setjobsInLocation(valueOfAqi);
      }
    }
  };
  const onClickSkip = () => {
    if (page === 1) {
      setCity(jobCity);
      setPage(2);
      setSize("large");
      setText(texts[0]);
      setAqi(jobCityAqi);
      setuserCityAqi("");
      setuserCity("");
    } else if (page === 2) {
      setPage(3);
      setSize("large");
      setText(texts[2]);
      setAqi(jobsInLocation);
      setjobCityAqi("");
      setjobCity("");
    }
  };

  return (
    <Grid container data-testid="search-page">
      <Grid item xs={7}>
        <Step
          data-testid="search-page-step"
          page={page}
          onClickBack={onClickBack}
          onClickNext={onClickNext}
          onClickSkip={onClickSkip}
          handleLocationChange={handleLocationChange}
          nextPath={nextPath}
        />
      </Grid>
      <Grid item xs={5}>
        <AQI
          src={images[page - 1]}
          alt={alts[page - 1]}
          totalJobs={aqi}
          city={city}
          size={size}
          text={text}
        />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    JobLocation: state.jobLocation,
    UserLocation: state.userLocation,
    Skills: state.skills,
  };
};

StepPageDispatch();

export default connect(mapStateToProps, StepPageDispatch)(StepPage);
