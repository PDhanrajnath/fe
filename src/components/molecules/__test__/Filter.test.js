import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filter from "../Filter/Filter";

describe("Filter", () => {
    it("Matches the snapshot", () => {
        const { container } = render(
            <Filter label={"Internship"} filters={[]} handleChange={()=>{}}/>
        );
        expect(container).toMatchSnapshot();
    });

    test("test filter render", () => {
        const { getByTestId } = render(<Filter label={"Internship"} filters={[]} handleChange={()=>{}}/>);
        expect(getByTestId("filter")).toBeInTheDocument();
    });
});