import React from 'react';
import TransitType from "./TransitType";
import theme from '../../../utils/theme/theme';
import { ThemeProvider } from '@material-ui/core';

export default {
    title: 'Molecules/TransitType',
    component: TransitType
};

const Template = (args) => <ThemeProvider theme={theme}><TransitType {...args} /></ThemeProvider>;

export const Bus = Template.bind({});
Bus.args = {
    type: 'bus',
    fare: '15$',
    time: '20 mins',
    description: "Catch a bus 38X at 3.42 PM to Secunderabad bus stand.",
    lateStatus: '2 mins',
    isLate: true
};

export const Walk = Template.bind({});
Walk.args = {
    type: 'walk',
    time: '5 mins',
    description: "Head north on St. Johns road."
};

export const Metro = Template.bind({});
Metro.args = {
    type: 'metro',
    fare: '56$',
    time: '38 mins',
    description: "Catch a blue line metro towards Raidurg.",
    isLate: false
};