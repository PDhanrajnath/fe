import React from "react";
import CommuteIcon from "./CommuteIcon";
import { action } from "@storybook/addon-actions";

export default {
  title: "Atoms/CommuteIcon",
  component: CommuteIcon,
};

const Template = (args) => <CommuteIcon {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  type: "metro",
  onClick: action("Train icon clicked"),
  selected: true,
};
