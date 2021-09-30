import {
  Divider,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import BackButton from "../../atoms/back-button/BackButton";
import Button from "../../atoms/button/Button";
import HeadingText from "../../atoms/headingText/HeadingText";
import InputTextField from "../../molecules/InputTextField/InputTextField";
import StepperGroup from "../../molecules/StepperGroup/StepperGroup";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import { connect } from "react-redux";
// import { getAllSkills } from "../../../state/action/action";
import { apis } from "../../../utils/resources/resources";
import { StepDispatch } from "../../../utils/utils/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    marginTop: 20
  },
  divider: {
    marginTop: 30,
    marginBottom: 10,
    color: "#e3f3f6"
  },
  items: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: theme.spacing(15),
  },
  heading: {
    marginTop: theme.spacing(11),
    textAlign: "left"
  },
  backButton: {
    marginTop: theme.spacing(12),
  },
  subHeading: {
    marginTop: theme.spacing(6),
    textAlign: "left"
  },
  textIcon: {
    marginTop: theme.spacing(4),
    "&::hover": {
      bottom: "100%",
    },
  },
  buttons: {
    marginTop: theme.spacing(8),
    display: "flex",
  },
  button: {
    marginRight: theme.spacing(6),
  },
}));

const Step = (props) => {
  const str = apis.GET_SKILLS;
  const url = new URL(str);

  const handleSkill = () => {
    fetch(url)
    .then( (res) => res.json())
    .then((res) => props.getAllSkills(res))
    .catch((e) => console.log(e));
  };

  useEffect(() => {
    handleSkill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const classes = useStyles();
  const jobArray = [
    "Hyderabad, Telangana, India",
    "Indore, MP, India",
    "Mumbai, Maharashtra, India",
    "Patna, Bihar, India",
    "Banglore, Karnataka, India",
    "Delhi, Delhi, India"
  ];
  const skillsArray = props.searchOptions1;
  const subHeadings=["Where do you stay?", "Where do you want to work?","What do you want to do?"];
  const inputs = [
    {
      label: "Enter your location",
      icon: <CustomRoomOutlinedIcon />,
      options: jobArray,
    },
    {
      label: "Enter your job location",
      icon: <CustomRoomOutlinedIcon />,
      options: jobArray,
    },
    {
      label: "Enter your skills",
      icon: <CustomWorkOutlined />,
      options: skillsArray,
    },
  ];
  return (
    <div className={classes.root} data-testid="step" >
      <StepperGroup
        item1={props.page >= 1}
        item2={props.page >= 2}
        item3={props.page >= 3}
      />
      <div  class={classes.divider}>
        <Divider />
      </div>
      <div className={classes.items}>
        <div className={classes.heading}>
          <HeadingText label="More than 2000 people are using Green Commute " />
        </div>
        <div className={classes.backButton}>
          {props.page !== 1 && <BackButton label="Back" onClick={props.onClickBack} />}
        </div>

        <div className={classes.subHeading}>
        <Typography variant="subtitle1">{subHeadings[props.page -1]}</Typography>
          
        </div>
        <div className={classes.textIcon}>
          {props.page === 1 && <InputTextField
            placeholder={inputs[props.page - 1].label}
            options={inputs[props.page - 1].options}
            icon={inputs[props.page - 1].icon}
            isMulti={false}
            value={props.userLocation}
            onChange={props.handleLocationChange}
          />}
          {props.page === 2 && <InputTextField
            placeholder={inputs[props.page - 1].label}
            options={inputs[props.page - 1].options}
            icon={inputs[props.page - 1].icon}
            isMulti={false}
            value={props.jobLocation}
            onChange={props.handleLocationChange}
          />}
          {props.page === 3 && <InputTextField
            placeholder={inputs[props.page - 1].label}
            options={inputs[props.page - 1].options}
            icon={inputs[props.page - 1].icon}
            isMulti={true}
            value={props.skills}
            onChange={props.handleLocationChange}
          />}
        </div>
        <div>
          {props.page === 1 || props.page === 2 ? (
            <div className={classes.buttons}>
              <div className={classes.button}>
                <Button
                  variant="contained"
                  color="primary"
                  label="Next"
                  type="medium"
                  onClick={props.onClickNext}
                />
              </div>
              <div className={classes.button}>
                <Button
                  variant="outlined"
                  color="primary"
                  label="Skip"
                  type="medium"
                  onClick={props.onClickSkip}
                />
              </div>
            </div>
          ) : (
            <div className={classes.buttons}>
              <div className={classes.button}>
                <Button
                  variant="contained"
                  color="primary"
                  label="Finish"
                  type="medium"    
                  onClick={() => props.nextPath('/findJobs')}            
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CustomRoomOutlinedIcon = withStyles({
  root: {
    color: "#9bbdcb",
  },
})((props) => <RoomOutlinedIcon {...props} />);

const CustomWorkOutlined = withStyles({
  root: {
    color: "#9bbdcb",
  },
})((props) => <WorkOutlineIcon {...props} />);


Step.propTypes= {
  page: PropTypes.number,
};

Step.defaultProps= {
  page: 1,
};

const mapStateToProps = (state) => {
  return {
    searchOptions1: state.searchOptions1,
    jobLocation: state.jobLocation,
    userLocation: state.userLocation,
    skills: state.skills
  };
}; 

StepDispatch();


export default connect(mapStateToProps, StepDispatch)(Step);
