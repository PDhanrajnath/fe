import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterCheckbox from "../filterCheckbox/FilterCheckbox";

describe("Filter checkbox", () => {
    it("Matches the snapshot", () => {
        const { container } = render(
            <FilterCheckbox />
        );
        expect(container).toMatchSnapshot();
    });

    test("test filter checkbox render", () => {
        const { getByTestId } = render(<FilterCheckbox />);
        expect(getByTestId("filter-checkbox")).toBeInTheDocument();
    });
});