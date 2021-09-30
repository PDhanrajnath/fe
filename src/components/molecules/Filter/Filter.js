import React from "react";
import PropTypes from 'prop-types';
import {makeStyles, FormControlLabel} from "@material-ui/core";
import FilterCheckbox from "../../atoms/filterCheckbox/FilterCheckbox";

const useStyles = makeStyles((theme) => ({
    checkboxLabel: {
        fontFamily: theme.typography.fontFamily,
        fontSize: '14px',
        letterSpacing: '0.1px',
        width: '74px',
        height: '22px',
        lineHeight: '1.57',
        color: '#5f7381'
    }
}));

const Filter = ({label, filters, handleChange}) => {
    const booleanValue = (checkboxFilters, checkboxLabel) => {
        for(let i = 0; i < checkboxFilters.length; i++) {
            if(checkboxFilters[i].label === checkboxLabel) {
                return checkboxFilters[i].checked;
            }
        }
    };
    const classes = useStyles();
    const [select, setSelect] = React.useState(booleanValue(filters, label));
    const afterSelected = () => {
        setSelect(!select);
    };
    const handleCheckBox = (e) => {
        afterSelected();
        handleChange(e.target.checked, label);
    };
    return (
            <FormControlLabel
                data-testid="filter"
                control={<FilterCheckbox checked={select} onChange={handleCheckBox} name={label} />}
                label={<span className={classes.checkboxLabel} >{label}</span>}  
            />
    );
};

Filter.propTypes = {
    label: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    handleChange: PropTypes.func,
};

export default Filter;