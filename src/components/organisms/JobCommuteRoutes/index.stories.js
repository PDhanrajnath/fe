import React from 'react';
import theme from '../../../utils/theme/theme';
import { ThemeProvider } from '@material-ui/core';
import JobCommuteRoutes from '.';

export default {
    title: 'Organisms/Routes',
    component: JobCommuteRoutes
};

const Template = (args) => <ThemeProvider theme={theme}><JobCommuteRoutes {...args} /></ThemeProvider>;

export const Primary = Template.bind({});
Primary.args = {
    url: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
    alt: "BMW logo",
    jobTitle: "User Experience Designer",
    companyName: "BMW",
    location:"Hitech City, Telangana",
    isPrimary: false,
    from: "East Marredpally, E Marredpally",
    to: "Hitech City, Telangana, Secunderabad",
    onClickSave: () => {alert("save click");},
    onClickApply: () => {alert("apply click");},
    commuteTypes: [
        {
            type: 'bus',
            fare: '15$',
            time: '20 mins',
            description: "Catch a bus 38X at 3.42 PM to Secunderabad bus stand.",
            lateStatus: '2 mins',
            isLate: true
        },
        {
            type: 'walk',
            time: '5 mins',
            description: "Head north on St. Johns road."
        },
        {
            type: 'metro',
            fare: '56$',
            time: '38 mins',
            description: "Catch a blue line metro towards Raidurg.",
            isLate: false
        }
    ]
};