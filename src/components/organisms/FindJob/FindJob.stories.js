import React from 'react';
import FindJob from "./FindJob";
import theme from "../../../utils/theme/theme";
import {ThemeProvider, withStyles} from "@material-ui/core";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Organisms/Search',
    component: FindJob
};

const Template = (args) => <FindJob {...args} />;


const CustomWorkOutlined = withStyles({
    root: {
        color: '#5f7381'
    },
})((props) => <WorkOutlineIcon {...props} />);


const CustomRoomOutlinedIcon = withStyles({
    root: {
        color: '#5f7381'
    },
})((props) => <RoomOutlinedIcon {...props} />);


export const SingleSelectEntity = Template.bind({});
SingleSelectEntity.args = {
    placeholder1: "Search skills",
    options1: [
        { title: 'Product Designer'},
        { title: 'Manager'},
        { title: 'Developer'},
        { title: 'Python'},
        { title: 'Spring'},
        { title: "UX Designer"},
        { title: 'Java'}
    ],
    icon1: <CustomWorkOutlined fontSize={'small'}/>,
    placeholder2: "Location",
    options2: [
        { title: 'Hyderabad'},
        { title: 'Indore'},
        { title: 'Mumbai'},
        { title: 'Patna'},
        { title: 'Banglore'},
        { title: "Delhi"},
    ],
    icon2: <CustomRoomOutlinedIcon fontSize={'small'}/>,
    onSearchCLick: action(" Search button clicked")
};