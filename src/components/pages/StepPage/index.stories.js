import React from "react";
import StepPage from ".";

export default {
  title: "pages/StepPage",
  component: StepPage,
};

const Template = (args) => <StepPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
