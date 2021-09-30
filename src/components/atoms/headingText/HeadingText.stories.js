import React from "react";
import HeadingText from "./HeadingText";

export default {
  title: "Atoms/HeadingText",
  component: HeadingText,
};

const Template = (args) => <HeadingText {...args} />;

export const InputHeading = Template.bind({});
InputHeading.args = {
  label: "Where do you stay?",
};
