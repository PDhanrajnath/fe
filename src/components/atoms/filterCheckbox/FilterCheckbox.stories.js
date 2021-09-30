import React from "react";
import FilterCheckbox from "./FilterCheckbox";

export default {
  title: "Atoms/FilterCheckbox",
  component: FilterCheckbox,
};

const Template = (args) => <FilterCheckbox {...args} />;

export const CheckBox = Template.bind({});
CheckBox.args = {};
