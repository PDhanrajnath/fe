import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterGroup from "../FilterGroup";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../../state/reducer/rootReducer";

const store = createStore(rootReducer);

const filterValues = [
  {
    heading: "Distance",
    labels: [
      {
        option: "0-10 kms",
        selected: false,
      },
      {
        option: "10-20 kms",
        selected: false,
      },
      {
        option: "20-30 kms",
        selected: false,
      },
      {
        option: "30-40 kms",
        selected: false,
      },
    ],
  },
  {
    heading: "Distance",
    labels: [
      {
        option: "0-10 kms",
        selected: false,
      },
      {
        option: "10-20 kms",
        selected: false,
      },
      {
        option: "20-30 kms",
        selected: false,
      },
      {
        option: "30-40 kms",
        selected: false,
      },
    ],
  },
  {
    heading: "Distance",
    labels: [
      {
        option: "0-10 kms",
        selected: false,
      },
      {
        option: "10-20 kms",
        selected: false,
      },
      {
        option: "20-30 kms",
        selected: false,
      },
      {
        option: "30-40 kms",
        selected: false,
      },
    ],
  },
  {
    heading: "Distance",
    labels: [
      {
        option: "0-10 kms",
        selected: false,
      },
      {
        option: "10-20 kms",
        selected: false,
      },
      {
        option: "20-30 kms",
        selected: false,
      },
      {
        option: "30-40 kms",
        selected: false,
      },
    ],
  },
  {
    heading: "Distance",
    labels: [
      {
        option: "0-10 kms",
        selected: false,
      },
      {
        option: "10-20 kms",
        selected: false,
      },
      {
        option: "20-30 kms",
        selected: false,
      },
      {
        option: "30-40 kms",
        selected: false,
      },
    ],
  },
  {
    heading: "Distance",
    labels: [
      {
        option: "0-10 kms",
        selected: false,
      },
      {
        option: "10-20 kms",
        selected: false,
      },
      {
        option: "20-30 kms",
        selected: false,
      },
      {
        option: "30-40 kms",
        selected: false,
      },
    ],
  },
];
global.fetch = jest.fn(() => Promise.resolve());
describe("Filter Group placeholder test", () => {
  it("Matches the snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        {" "}
        <FilterGroup filterValues={filterValues} />{" "}
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  test("test filter-group render", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <FilterGroup filterValues={filterValues} />
      </Provider>
    );
    expect(getByTestId("filter-group")).toBeInTheDocument();
  });
});
