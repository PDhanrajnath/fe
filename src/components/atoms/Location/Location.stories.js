import React from "react";
import { Location } from "./Location";

export default {
  title: "atoms/Location",
  component: Location,
};

const Template = (args) => <Location {...args} />;

export const Secundrabad = Template.bind({});
Secundrabad.args = {
  label: "East Marredpally, Secundrabad",
};
