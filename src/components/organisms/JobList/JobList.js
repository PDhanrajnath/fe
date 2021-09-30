import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import JobCard from "../JobCard/JobCard";
import CardLabel from "../../atoms/cardLabel/CardLabel";
import FilterListOutlinedIcon from "@material-ui/icons/FilterListOutlined";
import Button from "@material-ui/core/Button";
import FindJob from "../FindJob/FindJob";
import Dialog from "@material-ui/core/Dialog";
import FilterGroup from "../FilterGroup";
import { filterValues } from "../../../utils/constants/constant";
import ChipGroup from "../../molecules/ChipGroup";
import { connect } from "react-redux";
import { chipAndFilterGroupDispatch } from "../../../utils/utils/utils";

const useStyles = makeStyles((theme) => ({
  primaryParent: {
    boxSizing: "border-box",
    border: "solid 1px #e3f3f6",
    background: "#fafafa",
    overflow: "auto",
    height: "calc(100vh - 72px)",
  },
  secondaryParent: {
    boxSizing: "border-box",
    border: "solid 1px #e3f3f6",
    width: "calc(100% - 390px)",
    background: "#fafafa",
    overflow: "scroll",
    height: "calc(100vh - 72px)",
  },
  primaryList: {
    marginTop: "30px",
    marginLeft: "80px",
    marginRight: "40px",
  },
  semiBold: {
    fontWeight: "600",
    fontSize: "20px",
  },
  itemMargin: {
    marginBottom: "10px",
  },
  filterIcon: {
    width: "16px",
    height: "19px",
    color: theme.palette.secondary.main,
    marginRight: "12px",
  },
  filterButton: {
    alignSelf: "center",
  },
  filterButtonAlin: {
    textAlign: "right",
  },
  root: {
    border: "solid 1px #e3f3f6",
    background: "white",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  activeCard: {
    border: "solid 2px #5ac568"
  },
  filterLabel: {
    fontSize: "14px",
    color: "#5f7381",
  }
}));

function SimpleDialog(props) {
  const { onClose, selectedValue, open , fetchJobs} = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = () => {
    onClose();
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <FilterGroup
        filterValues={filterValues}
        handleClose={handleClose}
        handleListItemClick={handleListItemClick}
        fetchJobs={fetchJobs}
      />
    </Dialog>
  );
}

const JobList = ({
  isPrimary,
  jobs,
  skill,
  jobLocation,
  placeholder1,
  options1,
  icon1,
  placeholder2,
  options2,
  icon2,
  onSearchCLick,
  onJobCardClick,
  showFindJobs,
  fetchJobs,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const [active, setActive] = React.useState();

  const onCardClick = (index) => {
    setActive(index);
  };

  const classes = useStyles();
  const jobCards = jobs.map((obj, index) => {
    return (
      <Grid
        item
        key={index}
        xs={isPrimary ? 4 : 12}
          onClick={() => {
            onJobCardClick(obj);
            onCardClick(index);
          }
        }
      >
        {" "}
        <JobCard
          active={index === active}
          isPrimary={isPrimary}
          logoUrl={obj.logoUrl}
          logoInfo={obj.logoInfo}
          jobTitle={obj.jobTitle}
          companyName={obj.companyName}
          location={obj.location}
          commuteOptions={obj.commuteOptions}
        />{" "}
      </Grid>
    );
  });

  return (
    <Grid
      container
      className={isPrimary ? classes.primaryParent : classes.secondaryParent}
      data-testid="jobList-placeholder"
    >
      <Grid container item className={classes.primaryList} direction="column">
        {showFindJobs && (
          <Grid item>
            <Typography variant="h6">Find Jobs</Typography>
            <FindJob
              placeholder1={placeholder1}
              options1={options1}
              options2={options2}
              icon1={icon1}
              placeholder2={placeholder2}
              icon2={icon2}
              onSearchCLick={onSearchCLick}
              skill={skill}
              JobLocation={jobLocation}
            />
          </Grid>
        )}
        {showFindJobs && (
          <Grid item container direction="row" justify="flex-end">
            <Grid item xs={9} container direction="column">
              <Grid item className={classes.itemMargin}>
                <Typography variant="h6" className={classes.semiBold}>
                  Recommended for you
                </Typography>
              </Grid>
              <Grid item className={classes.itemMargin}>
                <CardLabel label="Based on your profile, skills and search history" />
              </Grid>
            </Grid>
            <Grid item xs={3} className={classes.filterButton}>
              <div className={classes.filterButtonAlin}>
                <Button
                  variant="outlined"
                  className={classes.root}
                  onClick={handleClickOpen}
                  data-testid="filterButton"
                >
                  {" "}
                  <FilterListOutlinedIcon className={classes.filterIcon} />
                  <Typography className={classes.filterLabel} variant="h4"  >
                    Filter
                  </Typography>
                </Button>
                <SimpleDialog open={open} onClose={handleClose} fetchJobs={fetchJobs}/>
              </div>
            </Grid>
            <Grid item xs={12}>
              <ChipGroup chips={[]} fetchJobs={fetchJobs}></ChipGroup>
            </Grid>
          </Grid>
        )}

        <Grid item container justify="center" spacing={isPrimary ? 9 : 2}>
          {jobCards}
        </Grid>
      </Grid>
    </Grid>
  );
};

JobList.propTypes = {
  isPrimary: PropTypes.bool,
  jobs: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    Filters: state.filters,
  };
};

chipAndFilterGroupDispatch();

export default connect(mapStateToProps, chipAndFilterGroupDispatch)(JobList);
