import React from "react";
import FilterGroup from ".";
import {filterValues} from '../../../utils/constants/constant';

export default {
  title: "organisms/FilterGroup",
  component: FilterGroup,
};

const Template = (args) => <FilterGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  filterValues: filterValues,
};