import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../../utils/theme/theme';
import Stepper from './Stepper';

export default {
    title: 'molecules/Stepper',
    component: Stepper,
};

const Template = (args) => <ThemeProvider theme={theme}><Stepper {...args} /></ThemeProvider>;

export const Primary = Template.bind({});

Primary.args = {
    number:"1",  
    label: "Your Location", 
    isVisited: true,
};