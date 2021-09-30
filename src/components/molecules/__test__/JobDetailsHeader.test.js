import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import JobDetailsHeader from '../JobDetailsHeader/JobDetailsHeader';


global.fetch = jest.fn(() =>
  Promise.resolve()
);

describe("JobDetailsHeader placeholder test", () => {
  it("Matches the snapshot", () => {
    const { container } = render(
      <JobDetailsHeader  />
    );
    expect(container).toMatchSnapshot();
  });

  test("test JobDetailsHeader render", () => {
    
    const { getByTestId } = render(<JobDetailsHeader />);
    expect(getByTestId("jobDetailsHeader-placeholder")).toBeInTheDocument();
  });
});