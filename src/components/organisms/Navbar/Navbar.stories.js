import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import theme from '../../../utils/theme/theme';
import Navbar from './Navbar';

export default {
    title: 'organisms/Navbar',
    component: Navbar,
};

const Template = (args) =><ThemeProvider theme={theme}><div style={{width:'270px'}}><Navbar {...args}/></div></ThemeProvider> ;

export const Primary = Template.bind({});

Primary.args = {
    isSelected: true,
};