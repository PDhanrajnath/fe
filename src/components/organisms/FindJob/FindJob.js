import React from "react";
import {Button, Divider, makeStyles, withStyles} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import PlainInputField from "../../molecules/InputTextField/PlainInputField";
import { connect } from 'react-redux';
import { FindJobDispatch } from "../../../utils/utils/utils";

const useStyles = makeStyles((theme) => ({
    textInput:{
        '&::placeholder': {
            fontFamily: 'montserrat',
            fontWeight: '500',
            fontSize: '16px',
            letterSpacing: '0.1px',
            color: '#5f7381',
            opacity: 0.8
        },
        fontFamily: 'montserrat',
        fontWeight: '500',
        fontSize: '16px'
    },
    border:{
        border: '1px solid #e3f3f6',
        borderRadius: '10px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        background: 'white',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(5)
    },
    searchButton:{
        borderRadius: "0px 10px 10px 0px",
        textAlign: 'center',
        height: '100%',
        width: '10%'
    },
    innerInputBase:{
        width: '100%',
        display: "flex"
    }
}));

const CustomDivider = withStyles({
    root: {
        height: '80%'
    },
})((props) => <Divider {...props} />);


const CustomInput1 = withStyles({
    root: {
        height: '50px',
        width: '50%',
        display: 'flex',
        alignItems: 'center'
    },
})((props) => <PlainInputField {...props} />);


const CustomInput2 = withStyles({
    root: {
        borderRadius: '10px',
        height: '50px',
        width: '40%',
        display: 'flex',
        alignItems: 'center'
    },
})((props) => <PlainInputField {...props} />);

const FindJob = ({placeholder1, options1, icon1, placeholder2, options2, icon2, onSearchCLick, location, skills, skill, JobLocation}) => {
    const classes = useStyles();

    return (
        <div  data-testid="find-job" className={classes.border}>
            <CustomInput1 classes={classes} placeholder={placeholder1} options={options1} icon={icon1} isMulti={false} value={skill} onChange={(e,v) => skills([v])} />
            <CustomDivider variant="middle" orientation={"vertical"} />
            <CustomInput2 classes={classes} placeholder={placeholder2} options={options2} icon={icon2} isMulti={false} value={JobLocation} onChange={(e,v) => location(v)} />
            <Button
                className={classes.searchButton}
                variant={'contained'}
                color={'primary'}
                onClick={onSearchCLick}
            >
                <SearchIcon />
            </Button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        searchOptions2: state.searchOptions2
    };
  }; 

FindJobDispatch();

export default connect(mapStateToProps,FindJobDispatch)(FindJob);