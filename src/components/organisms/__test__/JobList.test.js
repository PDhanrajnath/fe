import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import JobList from "../JobList/JobList";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import { withStyles } from "@material-ui/core";
import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../../state/reducer/rootReducer";

const store = createStore(rootReducer);

const CustomWorkOutlined = withStyles({
  root: {
    color: "#5f7381",
  },
})((props) => <WorkOutlineIcon {...props} />);

const CustomRoomOutlinedIcon = withStyles({
  root: {
    color: "#5f7381",
  },
})((props) => <RoomOutlinedIcon {...props} />);

const properties = {
  isPrimary: true,
  jobs: [
    {
      logoUrl: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
      logoInfo: "bmw logo",
      jobTitle: "User Experience Designer",
      companyName: "BMW",
      location: "Hyderabad, Telangana, India",
      commuteOptions: [
        { type: "metro" },
        { type: "bus" },
        { type: "car" },
        { type: "bike" },
      ],
    },
    {
      logoUrl: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
      logoInfo: "bmw logo",
      jobTitle: "User Experience Designer",
      companyName: "BMW",
      location: "Hyderabad, Telangana, India",
      commuteOptions: [
        { type: "metro" },
        { type: "bus" },
        { type: "car" },
        { type: "bike" },
      ],
    },
    {
      logoUrl: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
      logoInfo: "bmw logo",
      jobTitle: "User Experience Designer",
      companyName: "BMW",
      location: "Hyderabad, Telangana, India",
      commuteOptions: [
        { type: "metro" },
        { type: "bus" },
        { type: "car" },
        { type: "bike" },
      ],
    },
    {
      logoUrl: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
      logoInfo: "bmw logo",
      jobTitle: "User Experience Designer",
      companyName: "BMW",
      location: "Hyderabad, Telangana, India",
      commuteOptions: [
        { type: "metro" },
        { type: "bus" },
        { type: "car" },
        { type: "bike" },
      ],
    },
    {
      logoUrl: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
      logoInfo: "bmw logo",
      jobTitle: "User Experience Designer",
      companyName: "BMW",
      location: "Hyderabad, Telangana, India",
      commuteOptions: [
        { type: "metro" },
        { type: "bus" },
        { type: "car" },
        { type: "bike" },
      ],
    },
    {
      logoUrl: "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg",
      logoInfo: "bmw logo",
      jobTitle: "User Experience Designer",
      companyName: "BMW",
      location: "Hyderabad, Telangana, India",
      commuteOptions: [
        { type: "metro" },
        { type: "bus" },
        { type: "car" },
        { type: "bike" },
      ],
    },
  ],
  placeholder1: "Search skills",
  options1: [
    { title: "Product Designer" },
    { title: "Manager" },
    { title: "Developer" },
    { title: "Python" },
    { title: "Spring" },
    { title: "UX Designer" },
    { title: "Java" },
  ],
  icon1: <CustomWorkOutlined fontSize={"small"} />,
  placeholder2: "Location",
  options2: [
    { title: "Hyderabad" },
    { title: "Indore" },
    { title: "Mumbai" },
    { title: "Patna" },
    { title: "Banglore" },
    { title: "Delhi" },
  ],
  icon2: <CustomRoomOutlinedIcon fontSize={"small"} />,
  onSearchCLick: action(" Search button clicked"),
};

const commuteOptions = [{ type: "metro" }, { type: "bus" }];

global.fetch = jest.fn(() => Promise.resolve());

describe("JobList placeholder test", () => {
  test("test JobList render", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <JobList {...properties} />
      </Provider>
    );
    expect(getByTestId("jobList-placeholder")).toBeInTheDocument();
  });

  it("Apply on click", () => {
    const { container, getByTestId, getByText } = render(
      <Provider store={store}>
        <JobList {...properties} showFindJobs={true} />
      </Provider>
    );
    const button = getByTestId("filterButton");
    fireEvent.click(button);
    const filter1 = getByText("0-10 kms");
    fireEvent.click(filter1);
    const filter2 = getByText("Yes");
    fireEvent.click(filter2);
    const filter3 = getByText("Fresher");
    fireEvent.click(filter3);
    const Apply = getByText("Apply");
    fireEvent.click(Apply);
    const closeChip = container.querySelector(".MuiChip-deleteIcon");
    fireEvent.click(closeChip);
    const clearAllFilter = getByText("clear all");
    expect(clearAllFilter).toBeInTheDocument();
    fireEvent.click(clearAllFilter);
  });

  it("Apply on click", () => {
    const { container, getByTestId, getByText } = render(
      <Provider store={store}>
        <JobList {...properties} showFindJobs={true} />
      </Provider>
    );
    const button = getByTestId("filterButton");
    fireEvent.click(button);
    const clear = getByText("Clear all");
    expect(clear).toBeInTheDocument();
    fireEvent.click(clear);
  });
});
