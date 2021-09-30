import React from 'react';
import Content from "./Content";
import theme from '../../../utils/theme/theme';
import { ThemeProvider } from '@material-ui/core';

export default {
    title: 'Molecules/Content',
    component: Content
};

const Template = (args) => <ThemeProvider theme={theme}><Content {...args} /></ThemeProvider>;

export const NormalContent = Template.bind({});
NormalContent.args = {
    heading: 'Description',
    description: ["Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide."]
};

export const ListContent = Template.bind({});
ListContent.args = {
    heading: 'What it takes',
    description: ["High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision", " Experience Design including the core Adobe Creative Suite products."]
};
