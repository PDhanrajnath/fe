import React from "react";
import AQI from ".";

export default {
  title: "molecules/AQI",
  component: AQI,
};

const Template = (args) => <AQI {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: 'assets/one.png',
  alt: "green commute",
  size: "large",
  text: "Enter the location to know Time Air Quality Index (AQI)"
};

export const Secondary = Template.bind({});
Secondary.args = {
  src: 'assets/one.png',
  alt: "green commute",
  totalJobs: 894,
  city: "Hyderabad",
  size: "small",
  text: "Real- Time Air Quality Index(AQI) in this location"
};