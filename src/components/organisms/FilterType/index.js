import React from 'react';
import Filter from '../../molecules/Filter/Filter';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    heading: {
        fontFamily: theme.typography.fontFamily,
        fontWeight: 600,
        fontSize: 14,
        marginBottom: -2,
    },
    fliterLabel: {
        marginBottom: -10,
    },
}));

const FilterType = (props) => {
    const classes = useStyles();
    const {labels, heading, handleChange, filters} = props;
    const Filters = labels.map((label) => {
        return (
            <div>
                {
                    label.option && 
                    <div className={classes.fliterLabel}>
                        <Filter filters={filters} label={label.option} handleChange={handleChange}/>
                    </div>
                }
            </div>);
    });
    return (
        <div data-testid="filter-type">
            <div className={classes.heading}>{heading}</div>
            {Filters}
        </div>
    );
};

export default FilterType;