import React from "react";
import ChipGroup from ".";

export default {
  title: "molecules/ChipGroup",
  component: ChipGroup,
};

const Template = (args) => <div style={{width: 690}}><ChipGroup {...args} /></div>;

const chips = ["10-20 km", "Past 24 hours", "Green Commute", "Fresher"];

const clearAll = () => {
  alert("all chips is removed");
};

export const Primary = Template.bind({});
Primary.args = {
  chips: chips,
  clearAll: clearAll,
};