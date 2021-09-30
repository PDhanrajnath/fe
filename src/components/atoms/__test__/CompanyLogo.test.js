import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CompanyLogo from '../CompanyLogo/CompanyLogo';

describe("CompanyLogo placeholder test", () => {
    it("Matches the snapshot", () => {
      const { container } = render(
        <CompanyLogo  />
      );
      expect(container).toMatchSnapshot();
    });
  
    test("test CompanyLogo render", () => {
      const { getByTestId } = render(<CompanyLogo  />);
      expect(getByTestId("img-placeholder")).toBeInTheDocument();
    });

  });