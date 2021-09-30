import React from 'react';
import {
    makeStyles,
} from '@material-ui/core';
import PlainInputField from "./PlainInputField";

const useStyles = makeStyles((theme) => ({
    chipLabel:{
        fontSize: '14px',
        color: '#19293b'
    },
    textInput:{
        '&::placeholder': {
            fontFamily: theme.typography.fontFamily,
            fontWeight: '500',
            fontSize: '16px',
            letterSpacing: '0.1px',
            color: '#9bbdcb',
            opacity: '0.8'
        },
        fontFamily: theme.typography.fontFamily,
        fontWeight: '500',
        fontSize: '16px'
    },
    border:{
        border: '1px solid #9bbdcb'
    },
    root: {
        borderRadius: '10px',
        height: '60px',
        width: '500px',
        display: 'flex',
        alignItems: 'center'
    },
    innerInputBase:{
        width: '100%',
        display: "flex"
    },
    textField: {
        borderRadius: '10px',
        minHeight: '62px',
        width: '500px',
    },
    textFieldIcon:{
        padding: theme.spacing(2)
    },
}));

const InputTextField = ({placeholder, options, icon, isMulti, onChange, value}) => {
    const classes = useStyles();

    return (
        <div  data-testid="input-field" className={`${!isMulti ? classes.border : ''} ${classes.root}`}>
            <PlainInputField classes={classes} placeholder={placeholder} options={options} icon={icon} isMulti={isMulti} onChange={onChange} value={value} />
        </div>
    );
};

export default InputTextField;