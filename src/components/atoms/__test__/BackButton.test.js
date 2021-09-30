import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import BackButton from "../back-button/BackButton";

describe("Back button", () => {
    it("Matches the snapshot", () => {
        const { container } = render(
            <BackButton onClick={()=>{}}/>
        );
        expect(container).toMatchSnapshot();
    });

    test("test back button render", () => {
        const { getByTestId } = render(<BackButton onClick={()=>{}}/>);
        expect(getByTestId("back-button")).toBeInTheDocument();
    });
});