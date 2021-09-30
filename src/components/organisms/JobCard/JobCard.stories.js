import React from 'react';
import JobCard from './JobCard';
import theme from '../../../utils/theme/theme';
import { ThemeProvider } from '@material-ui/core';

export default {
    title: 'Organisms/Card',
    component: JobCard
};

const PrimaryTemplate = (args) => <ThemeProvider theme={theme}><div style={{width: "330px"}}><JobCard {...args} /></div></ThemeProvider>;
const SecondaryTemplate = (args) => <ThemeProvider theme={theme}><div style={{width: "690px"}}><JobCard {...args} /></div></ThemeProvider>;

export const Primary = PrimaryTemplate.bind({});
Primary.args = {
    isPrimary : true,
    logoUrl : "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
    logoInfo: "bmw logo",
    jobTitle : "User Experience Designer",
    companyName :"BMW",
    location : "Hyderabad, Telangana, India",
    commuteOptions :[{type : 'metro'},{type : 'bus'},{type : 'car'},{type : 'bike'}],
};

export const Secondary = SecondaryTemplate.bind({});
Secondary.args = {
    isPrimary : false,
    logoUrl : "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
    logoInfo: "bmw logo",
    jobTitle : "User Experience Designer",
    companyName :"BMW",
    location : "Hyderabad, Telangana, India",
    commuteOptions :[{type : 'metro'},{type : 'bus'}],
};


