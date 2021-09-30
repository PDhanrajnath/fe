import React from 'react';
import JobDetails from './JobDetails';
import theme from '../../../utils/theme/theme';
import { ThemeProvider } from '@material-ui/core';

export default {
    title: 'Organisms/Details',
    component: JobDetails,
};


const Template = (args) => <ThemeProvider theme={theme}><JobDetails {...args} /></ThemeProvider>;

export const Details = Template.bind({});
Details.args = {
    url: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
    alt: "BMW logo",
    jobTitle: "User Experience Designer",
    companyName: "BMW",
    location:"Hitech City, Telangana",
    contentDescription: [
        {
            heading: 'Description',
            description: ["Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide."]
        },
        {
            heading: 'What it takes',
            description: [
                "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision",
                "Experience Design including the core Adobe Creative Suite products",
                "Excellent written and oral communication and presentation skills"
            ]
        }
    ]
};
