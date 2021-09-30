import React from 'react';
import JobDetailsHeader from './JobDetailsHeader';
import theme from '../../../utils/theme/theme';
import { ThemeProvider } from '@material-ui/core';

export default {
    title: 'molecules/CardDetailsHeader',
    component: JobDetailsHeader,
};


const Template = (args) => <ThemeProvider theme={theme}><JobDetailsHeader {...args} /></ThemeProvider>;

export const Description = Template.bind({});
Description.args = {
    url: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
    alt: "BMW logo",
    jobTitle: "User Experience Designer",
    companyName: "BMW",
    location:"Hitech City, Telangana",
    isPrimary: true,
};
