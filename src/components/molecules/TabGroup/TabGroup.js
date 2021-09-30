import React, { useState } from "react";
import List from "@material-ui/core/List";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import TabItem from "../../atoms/TabItem/TabItem";
import { Divider } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const TabGroup = (props) => {
  const getInitialStateValue = () => {
    const { location } = props;
    if (location.pathname === "/savedJobs") {
      return 2;
    }
    return 1;
  };
  const [value, setValue] = useState(getInitialStateValue());
  const list1 = [
    { icon: <DashboardOutlinedIcon />, label: "Dashboard" },
    { icon: <WorkOutlineOutlinedIcon />, label: "Find Jobs" },
    { icon: <BookmarkBorderOutlinedIcon />, label: "Saved Jobs" },
    { icon: <DescriptionOutlinedIcon />, label: "Practice Test" },
    { icon: <DateRangeOutlinedIcon />, label: "News & Events" },
    { icon: <HelpOutlineOutlinedIcon />, label: "Need Help?" },
    { icon: <PhoneInTalkOutlinedIcon />, label: "Contact Us" },
    { icon: <SettingsOutlinedIcon />, label: "Settings" },
  ];
  const nextPath = (path) => {
    props.history.push(path);
  };
  return (
    <div data-testid="tab-group">
      <List>
        {list1.map((item, index) => {
          if (index === 1) {
            return (
              <TabItem
                index={index}
                value={value}
                setValue={setValue}
                icon={item.icon}
                isClickable={true}
                label={item.label}
                onClick={() => nextPath("/findJobs")}
              />
            );
          }
          if (index === 2) {
            return (
              <TabItem
                index={index}
                value={value}
                setValue={setValue}
                icon={item.icon}
                isClickable={true}
                label={item.label}
                onClick={() => nextPath("/savedJobs")}
              />
            );
          }
          if (index === 4) {
            return <Divider />;
          }
          return (
            <TabItem
              index={index}
              value={value}
              icon={item.icon}
              isClickable={false}
              label={item.label}
            />
          );
        })}
      </List>
    </div>
  );
};

export default withRouter(TabGroup);
