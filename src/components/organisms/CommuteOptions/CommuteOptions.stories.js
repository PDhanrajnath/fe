import React from 'react';
import CommuteOptions from "./CommuteOptions";
import theme from '../../../utils/theme/theme';
import { ThemeProvider } from '@material-ui/core';

export default {
    title: 'Organisms/CommuteOptions',
    component: CommuteOptions
};

const Template = (args) => <ThemeProvider theme={theme}><CommuteOptions {...args} /></ThemeProvider>;

export const Options = Template.bind({});
Options.args = {
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