import React from "react";
import TabItem from "./TabItem";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";

export default {
  title: "atoms/TabItem",
  component: TabItem,
};

const Template = (args) => (
  <div style={{ width: 240 }}>
    <TabItem {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  label: "Dashboard",
  isActive: true,
  icon: <DashboardOutlinedIcon />,
};
