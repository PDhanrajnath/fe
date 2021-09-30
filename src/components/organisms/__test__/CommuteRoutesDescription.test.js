import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CommuteRoutesDescription from '../CommuteRoutesDescription/CommuteRoutesDescription';


describe("CommuteRoutesDescription placeholder test", () => {
  it("Matches the snapshot", () => {
    const { container } = render(
      <CommuteRoutesDescription />
    );
    expect(container).toMatchSnapshot();
  });

  test("test CommuteRoutesDescription render", () => {
    const { getByTestId } = render( <CommuteRoutesDescription />);
    expect(getByTestId("commuteRoutesDescription-placeholder")).toBeInTheDocument();
  });
});