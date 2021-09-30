import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import JobCommuteRoutes from "../JobCommuteRoutes";

const url = "https://m.media-amazon.com/images/I/61b2FkbZsEL._AC_SS350_.jpg";
const alt = "BMW logo";
const commuteTypes = [
  {
    type: "bus",
    fare: "15$",
    time: "20 mins",
    description: "Catch a bus 38X at 3.42 PM to Secunderabad bus stand.",
    lateStatus: "2 mins",
    isLate: true,
  },
  {
    type: "walk",
    time: "5 mins",
    description: "Head north on St. Johns road.",
  },
  {
    type: "metro",
    fare: "56$",
    time: "38 mins",
    description: "Catch a blue line metro towards Raidurg.",
    isLate: false,
  },
];

describe("Job Commute Routes placeholder test", () => {
  it("Matches the snapshot", () => {
    const { container } = render(
      <JobCommuteRoutes url={url} alt={alt} commuteTypes={commuteTypes} />
    );
    expect(container).toMatchSnapshot();
  });

  test("test Job Commute Routes render", () => {
    const { getByTestId } = render(
      <JobCommuteRoutes url={url} alt={alt} commuteTypes={commuteTypes} />
    );
    expect(getByTestId("job-commute-routes")).toBeInTheDocument();
  });
});
