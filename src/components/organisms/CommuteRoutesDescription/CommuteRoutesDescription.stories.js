import React from 'react';
import CommuteRoutesDescription from './CommuteRoutesDescription';
import theme from '../../../utils/theme/theme';
import { ThemeProvider } from '@material-ui/core';

export default {
    title: 'Organisms/RoutesDescription',
    component: CommuteRoutesDescription
};

const Template = (args) => <ThemeProvider theme={theme}><CommuteRoutesDescription {...args} /></ThemeProvider>;

export const Description = Template.bind({});
Description.args = {
    from: "East Marredpally, E Marredpally",
    to: "Hitech City, Telangana, Secunderabad",
};
