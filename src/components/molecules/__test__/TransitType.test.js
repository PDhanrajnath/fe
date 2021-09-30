import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TransitType from "../TransitType/TransitType";

describe("Transit type", () => {
    it("Matches the snapshot", () => {
        const { container } = render(
            <TransitType description={"Walk for 5 mins"}/>
        );
        expect(container).toMatchSnapshot();
    });

    test("test transit type render", () => {
        const { getByTestId } = render(<TransitType  description={"Walk for 5 mins"}/>);
        expect(getByTestId("transit-type")).toBeInTheDocument();
    });
});