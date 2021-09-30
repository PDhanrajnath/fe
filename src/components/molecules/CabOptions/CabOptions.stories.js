import React from 'react';
import PropTypes from 'prop-types';
import CabOptions from './CabOptions';
import theme from '../../../utils/theme/theme';
import { ThemeProvider } from '@material-ui/core';

export default {
    title: 'molecules/CabOptions',
    component: CabOptions,
};

const Template = (args) => <ThemeProvider theme={theme} ><CabOptions {...args} /></ThemeProvider>;

export const Options = Template.bind({});
Options.args = {
    options: [
        { type: "OLA", value: "40", url: "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1459446250/xx0u5xwwzygivm67ogsk.jpg" },
        { type: "UBER", value: "40", url: "https://semaine-production.s3.amazonaws.com/products/product/image/6827/large_Uber-app.jpg" },
        { type: "Rapido", value: "40", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOLJJfUAbhh1JVtRLgNCexBH9_cC2L3NvqA&usqp=CAU" }]
};
