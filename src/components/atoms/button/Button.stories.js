import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import theme from '../../../utils/theme/theme';
import Button from './Button';
export default {
    title: 'atoms/Button',
    component: Button,
};

const Template = (args) => <ThemeProvider theme={theme} ><Button {...args} /> </ThemeProvider>;
 
export const Primary = Template.bind({});

Primary.args = {
    label: "Next",
    color: "primary",
    type: "medium",
    variant: "outlined",
};