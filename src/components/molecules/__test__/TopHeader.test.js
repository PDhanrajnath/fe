import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TopHeader from '../TopHeader/TopHeader';

describe("TopHeader placeholder test", () => {
  it("Matches the snapshot", () => {
    const { container } = render(
      <TopHeader locationLabel="hyderabad" profileName="Bob" />
    );
    expect(container).toMatchSnapshot();
  });

  test("test TopHeader render", () => {
    const { getByTestId } = render(<TopHeader  locationLabel="hyderabad" profileName="Bob"/>);
    expect(getByTestId("topheader-placeholder")).toBeInTheDocument();
  });
});