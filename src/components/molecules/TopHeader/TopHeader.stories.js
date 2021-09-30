import React from 'react';
import PropTypes from 'prop-types';
import TopHeader from './TopHeader';
import theme from '../../../utils/theme/theme';
import { ThemeProvider } from '@material-ui/core';

export default {
    title: 'molecules/TopHeader',
    component: TopHeader,
};

const Template = (args) => <ThemeProvider theme={theme}><TopHeader {...args} /></ThemeProvider>;

export const TopHeaderOne = Template.bind({});
TopHeaderOne.args = {
    locationLabel: 'East Marredpally, Secundrabad',
    profileName: 'Sara Joseph',
};

export const TopHeaderTwo = Template.bind({});
TopHeaderTwo.args = {
    locationLabel: 'East Marredpally, Hyderabad',
    profileName: 'Joseph Sara',
};