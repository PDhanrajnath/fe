import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Divider, makeStyles, Paper } from "@material-ui/core";
import JobDetailsHeader from "../../molecules/JobDetailsHeader/JobDetailsHeader";
import Content from "../../molecules/Content/Content";
import Button from "../../atoms/button/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "360px",
    paddingLeft: "30px",
    marginRight: "30px",
    marginTop: "30px",
  },
  buttonsStyle: {
    width: "250px",
    marginTop: "16px",
  },
  columnMargin: {
    marginLeft: "8px",
  },
  divider: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
  },
  greenCommute: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    marginBottom: theme.spacing(4),
  },
  buttonLabel: {
    fontSize: "14px",
    padding: theme.spacing(1, 0),
  },
  Paper: {
    width: 390,
    border: 0,
    borderTop: "solid 1px #e3f3f6",
    height: "calc(100vh - 73px)",
    overflowY: "scroll",
    overflowX: "hidden",
  },
}));

const JobDetails = ({
  url,
  alt,
  jobTitle,
  companyName,
  location,
  contentDescription,
  onClickApply,
  onGreenCommuteClick,
  showFindJobs,
  jobId,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.Paper} elevation={0} variant="outlined" square>
      <Grid
        container
        data-testid="job-details"
        direction="column"
        className={classes.root}
      >
        <Grid item>
          <JobDetailsHeader
            url={url}
            alt={alt}
            jobTitle={jobTitle}
            jobId={jobId}
            companyName={companyName}
            location={location}
            onClickApply={onClickApply}
            isPrimary
            showFindJobs={showFindJobs}
            contentDescription={contentDescription}
            itemsRemoved={(id) => props.itemsRemoved(id)}
          />
        </Grid>
        <Grid item container direction="column">
          {contentDescription.map((item, index) => (
            <React.Fragment key={index}>
              <Divider className={classes.divider} variant="middle" />
              <Content description={item.description} heading={item.heading} />
            </React.Fragment>
          ))}
        </Grid>
        <div className={classes.greenCommute} onClick={onGreenCommuteClick}>
          <Button
            variant="contained"
            color="primary"
            type="long"
            label="Green Commute Routes"
          />
        </div>
      </Grid>
    </Paper>
  );
};

JobDetails.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  jobTitle: PropTypes.string,
  contentDescription: PropTypes.array,
  companyName: PropTypes.string,
  location: PropTypes.string,
};

export default JobDetails;
