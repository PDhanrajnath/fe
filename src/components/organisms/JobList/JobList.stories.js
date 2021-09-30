import React from 'react';
import JobList from './JobList';
import theme from '../../../utils/theme/theme';
import {ThemeProvider, withStyles} from '@material-ui/core';
import {action} from "@storybook/addon-actions";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

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



export default {
    title: 'Organisms/CardList',
    component: JobList
};

const Template = (args) => <ThemeProvider theme={theme}><JobList {...args} /></ThemeProvider>;

export const Primary = Template.bind({});
Primary.args = {
    isPrimary: true,
    jobs: [
        {
            logoUrl: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
            logoInfo: "bmw logo",
            jobTitle: "User Experience Designer",
            companyName: "BMW",
            location: "Hyderabad, Telangana, India",
            commuteOptions: [{ type: 'metro' }, { type: 'bus' }, { type: 'car' }, { type: 'bike' }],
        },
        {
            logoUrl: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
            logoInfo: "bmw logo",
            jobTitle: "User Experience Designer",
            companyName: "BMW",
            location: "Hyderabad, Telangana, India",
            commuteOptions: [{ type: 'metro' }, { type: 'bus' }, { type: 'car' }, { type: 'bike' }],
        },
        {
            logoUrl: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
            logoInfo: "bmw logo",
            jobTitle: "User Experience Designer",
            companyName: "BMW",
            location: "Hyderabad, Telangana, India",
            commuteOptions: [{ type: 'metro' }, { type: 'bus' }, { type: 'car' }, { type: 'bike' }],
        },
        {
            logoUrl: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
            logoInfo: "bmw logo",
            jobTitle: "User Experience Designer",
            companyName: "BMW",
            location: "Hyderabad, Telangana, India",
            commuteOptions: [{ type: 'metro' }, { type: 'bus' }, { type: 'car' }, { type: 'bike' }],
        },
        {
            logoUrl: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
            logoInfo: "bmw logo",
            jobTitle: "User Experience Designer",
            companyName: "BMW",
            location: "Hyderabad, Telangana, India",
            commuteOptions: [{ type: 'metro' }, { type: 'bus' }, { type: 'car' }, { type: 'bike' }],
        },
        {
            logoUrl: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
            logoInfo: "bmw logo",
            jobTitle: "User Experience Designer",
            companyName: "BMW",
            location: "Hyderabad, Telangana, India",
            commuteOptions: [{ type: 'metro' }, { type: 'bus' }, { type: 'car' }, { type: 'bike' }],
        },
    ],
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

export const Secondary = Template.bind({});
Secondary.args = {
    isPrimary: false,
    jobs: [
        {
            logoUrl: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
            logoInfo: "bmw logo",
            jobTitle: "User Experience Designer",
            companyName: "BMW",
            location: "Hyderabad, Telangana, India",
            commuteOptions: [{ type: 'metro' }, { type: 'bus' }, { type: 'car' }, { type: 'bike' }],
        },
        {
            logoUrl: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
            logoInfo: "bmw logo",
            jobTitle: "User Experience Designer",
            companyName: "BMW",
            location: "Hyderabad, Telangana, India",
            commuteOptions: [{ type: 'metro' }, { type: 'bus' }, { type: 'car' }, { type: 'bike' }],
        },
        {
            logoUrl: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
            logoInfo: "bmw logo",
            jobTitle: "User Experience Designer",
            companyName: "BMW",
            location: "Hyderabad, Telangana, India",
            commuteOptions: [{ type: 'metro' }, { type: 'bus' }, { type: 'car' }, { type: 'bike' }],
        },
        {
            logoUrl: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
            logoInfo: "bmw logo",
            jobTitle: "User Experience Designer",
            companyName: "BMW",
            location: "Hyderabad, Telangana, India",
            commuteOptions: [{ type: 'metro' }, { type: 'bus' }, { type: 'car' }, { type: 'bike' }],
        },
        {
            logoUrl: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
            logoInfo: "bmw logo",
            jobTitle: "User Experience Designer",
            companyName: "BMW",
            location: "Hyderabad, Telangana, India",
            commuteOptions: [{ type: 'metro' }, { type: 'bus' }, { type: 'car' }, { type: 'bike' }],
        },
        {
            logoUrl: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
            logoInfo: "bmw logo",
            jobTitle: "User Experience Designer",
            companyName: "BMW",
            location: "Hyderabad, Telangana, India",
            commuteOptions: [{ type: 'metro' }, { type: 'bus' }, { type: 'car' }, { type: 'bike' }],
        },
    ],
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


