import React from "react";
import Chip from ".";

export default {
  title: "atoms/Chip",
  component: Chip,
};

const Template = (args) => <Chip {...args} />;

const alertFunction = () => {
  alert("hello");
};

export const Primary = Template.bind({});
Primary.args = {
  // content: "hello",
  deleteFunction: alertFunction,
};
