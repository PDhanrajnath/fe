import React from "react";
import Label from ".";

export default {
  title: "atoms/LabelPlaceHolder",
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "small",
  text: "Real-Time air quality index (AQI)",
};
