import React from "react";
import FilterType from ".";
import {labels} from '../../../utils/constants/constant';

export default {
  title: "organisms/FilterType",
  component: FilterType,
};

const Template = (args) => <FilterType {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    heading: "Distance",
    labels: labels
  };