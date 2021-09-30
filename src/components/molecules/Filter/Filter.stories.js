import React from 'react';
import Filter from "./Filter";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Molecules/Filter',
    component: Filter
};

const Template = (args) => <Filter {...args} />;

export const CheckBoxFilter = Template.bind({});
CheckBoxFilter.args = {
    label: '0-10 km',
    handleChange: action(" Filter checkbox clicked")
};