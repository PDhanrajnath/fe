import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CommuteRoutes from '../CommuteRoutes/CommuteRoutes';

const icons = [{type : 'metro'},{type : 'bus'}];

describe("CommuteRoutes placeholder test", () => {
  it("Matches the snapshot", () => {
    const { container } = render(
      <CommuteRoutes icons={icons} onClick={()=>alert("clicked on commuteRoute")} />
    );
    expect(container).toMatchSnapshot();
  });

  test("test CommuteRoutes render", () => {
    const { getByTestId } = render(<CommuteRoutes icons={icons} onClick={()=>alert("clicked on commuteRoute")}/>);
    expect(getByTestId("commuteRoutes-placeholder")).toBeInTheDocument();
  });
});