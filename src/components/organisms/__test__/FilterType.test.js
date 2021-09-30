import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterType from "../FilterType";

const heading = "Distance";
const labels = [
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
  }
];

describe("Filter Type placeholder test", () => {
  it("Matches the snapshot", () => {
    const { container } = render(
      <FilterType labels={labels} heading={heading} filters={[]}/>
    );
    expect(container).toMatchSnapshot();
  });

  test("test filter-type render", () => {
    const { getByTestId } = render(<FilterType labels={labels} heading={heading} filters={[]} />);
    expect(getByTestId("filter-type")).toBeInTheDocument();
  });
});