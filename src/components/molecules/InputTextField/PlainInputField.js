import {Autocomplete} from "@material-ui/lab";
import CustomChip from "./CustomChip";
import {IconButton, InputAdornment, InputBase, TextField, Typography} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import {convertToSentenceCase} from "../../../state/converter/jobConverter";

const PlainInputField = ({classes, isMulti, options, icon, placeholder,onChange, value, Skills}) => (
    <Autocomplete
        multiple={isMulti}
        options={options}
        defaultValue={Skills}
        onChange={onChange}
        value={value}
        className={classes.root}
        getOptionLabel={(option) => convertToSentenceCase(option)}
        renderTags={(chips, getTagProps) =>
            chips.map((option, index) => (
                <CustomChip
                    variant="outlined"
                    label={<Typography className={classes.chipLabel} variant={'h4'}>{option}</Typography>}
                    size="small"
                    {...getTagProps({ index })}
                />
            ))
        }
        renderInput={(params) => (
            !isMulti ?
                <div className={classes.innerInputBase} ref={params.InputProps.ref}>
                    <IconButton>
                        {icon}
                    </IconButton>
                    <InputBase
                        {...params.inputProps}
                        inputProps={{ className: classes['textInput']}}
                        placeholder={placeholder}
                        
                    />
                </div> :
                <TextField
                    {...params}
                    variant="outlined"
                    placeholder={placeholder}
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: <><InputAdornment position="start">{icon}</InputAdornment>{params.InputProps.startAdornment}</>,
                        endAdornment: null,
                        classes: {root: classes['textField'],input: classes['textInput']}
                    }}
                />
        )}
    />
);

const mapStateToProps = (state) => {
    return {
        Skills: state.skills
    };
}; 

export default connect(mapStateToProps)(PlainInputField);
