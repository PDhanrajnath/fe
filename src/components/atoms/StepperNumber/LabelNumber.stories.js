import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../../utils/theme/theme";
import LabelNumber from "./LabelNumber";

export default {
  title: "atoms/StepperNumber",
  component: LabelNumber,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <LabelNumber {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {
  isVisited: false,
  number: "1",
};
