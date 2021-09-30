import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    list:{
        paddingLeft: theme.spacing(4),
        margin: 0
    }
}));

const Content = ({heading, description}) => {
    const classes = useStyles();

    return (
        <div data-testid="job-content">
            <Typography variant={'h2'}>{heading}</Typography>
            {
                description.length && description.length > 1 ?
                    <ul className={classes.list}>
                        {
                            description.map((item,index) => <li key={index}>
                                <Typography variant={'body2'}>{item}</Typography>
                            </li>)
                        }
                    </ul>
                    : <Typography variant={'body2'}>{description[0]}</Typography>
            }
        </div>
    );
};


Content.propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
};

export default Content;