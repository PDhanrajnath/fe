import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardLabel from '../cardLabel/CardLabel';

describe("CardLabel placeholder test", () => {
    it("Matches the snapshot", () => {
      const { container } = render(
        <CardLabel label="Hyderabad" isPrimary />
      );
      expect(container).toMatchSnapshot();
    });
  
    test("test CardLabel render", () => {
      const { getByTestId } = render(<CardLabel label="Hyderabad" isPrimary />);
      expect(getByTestId("cardLabel-placeholder")).toBeInTheDocument();
    });
  });