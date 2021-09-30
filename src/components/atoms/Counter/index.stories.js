import { ThemeProvider } from "@material-ui/core";
import React from "react";
import Counter from ".";
import Theme from "../../../utils/theme/theme";

export default {
  title: "atoms/Counter",
  component: Counter,
};

const Template = (args) => (
  <ThemeProvider theme={Theme}>
    {" "}
    <Counter {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  totalJobs: 897,
  city: "Hyderabad",
};
