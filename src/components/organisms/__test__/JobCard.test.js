import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import JobCard from '../JobCard/JobCard';

const commuteOptions = [{type : 'metro'},{type : 'bus'}];

describe("JobCard placeholder test", () => {
  it("Matches the snapshot", () => {
    const { container } = render(
      <JobCard commuteOptions={commuteOptions}  />
    );
    expect(container).toMatchSnapshot();
  });

  test("test JobCard render", () => {
    const { getByTestId } = render( <JobCard commuteOptions={commuteOptions}  />);
    expect(getByTestId("jobCard-placeholder")).toBeInTheDocument();
  });
});