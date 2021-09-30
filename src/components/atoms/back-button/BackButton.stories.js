import React from 'react';
import BackButton from "./BackButton";
import { action } from '@storybook/addon-actions';

export default {
    title: 'Atoms/BackButton',
    component: BackButton
};

const Template = (args) => <BackButton {...args} />;

export const WithText = Template.bind({});
WithText.args = {
    label: 'Back',
    onClick: action(" Back button clicked")
};

export const WithoutText = Template.bind({});
WithoutText.args = {
    onClick: action(" Back button clicked")
};
