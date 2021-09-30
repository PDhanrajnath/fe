import React from 'react';
import InputTextField from "./InputTextField";
import TopHeader from "../TopHeader/TopHeader";
import theme from "../../../utils/theme/theme";
import TransitType from "../TransitType/TransitType";
import {ThemeProvider, withStyles} from "@material-ui/core";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import WorkOutlined from "@material-ui/icons/WorkOutlined";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

export default {
    title: 'Molecules/InputTextField',
    component: InputTextField
};

const Template = (args) => <ThemeProvider theme={theme}><InputTextField {...args} /></ThemeProvider>;

const CustomWorkOutlined = withStyles({
    root: {
        color: '#9bbdcb'
    },
})((props) => <WorkOutlineIcon {...props} />);


const CustomRoomOutlinedIcon = withStyles({
    root: {
        color: '#9bbdcb'
    },
})((props) => <RoomOutlinedIcon {...props} />);



export const SingleSelectEntity = Template.bind({});
SingleSelectEntity.args = {
    placeholder: "Enter your location",
    options: [
        { title: 'Hyderabad'},
        { title: 'Indore'},
        { title: 'Mumbai'},
        { title: 'Patna'},
        { title: 'Banglore'},
        { title: "Delhi"},
    ],
    icon: <CustomRoomOutlinedIcon />,
    isMulti: false
};

export const MultiSelectEntity = Template.bind({});
MultiSelectEntity.args = {
    placeholder: "Enter your skills",
    options: [
        { title: 'Product Designer'},
        { title: 'Manager'},
        { title: 'Developer'},
        { title: 'Python'},
        { title: 'Spring'},
        { title: "UX Designer"},
        { title: 'Java'}
    ],
    icon: <CustomWorkOutlined />,
    isMulti: true
};