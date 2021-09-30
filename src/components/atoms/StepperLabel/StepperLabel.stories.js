import { ThemeProvider } from "@material-ui/core";
import React from "react";
import Label from "./StepperLabel";
import theme from "../../../utils/theme/theme";

export default {
  title: "atoms/StepperLabel",
  component: Label,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Label {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {
  label: "Your Location",
  isVisited: false,
};
