import React from "react";
import CompanyLogo from "./CompanyLogo";

export default {
  title: "atoms/CompanyLogo",
  component: CompanyLogo,
};

const Template = (args) => <CompanyLogo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  url: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
  alt: "BMW logo",
  isPrimary: true,
};
export const Secondary = Template.bind({});
Secondary.args = {
  url: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
  alt: "BMW logo",
  isPrimary: false,
};
