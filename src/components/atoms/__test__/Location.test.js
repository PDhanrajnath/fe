import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Location } from '../Location/Location';

describe("Location placeholder test", () => {
    it("Matches the snapshot", () => {
      const { container } = render(
        <Location label="Hyderabad" />
      );
      expect(container).toMatchSnapshot();
    });
  
    test("test Location render", () => {
      const { getByTestId } = render(<Location label="Hyderabad" />);
      expect(getByTestId("location-placeholder")).toBeInTheDocument();
    });
  });