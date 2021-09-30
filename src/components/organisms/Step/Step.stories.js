import { ThemeProvider,withStyles } from '@material-ui/core';
import React from 'react';
import theme from '../../../utils/theme/theme';
import Step from './Step';

export default {
    title: 'organisms/Step',
    component: Step,
};

const Template = (args) => <ThemeProvider theme={theme} > <Step {...args} /> </ThemeProvider>;

export const Primary = Template.bind({});

Primary.args = {
    page: 1,
};