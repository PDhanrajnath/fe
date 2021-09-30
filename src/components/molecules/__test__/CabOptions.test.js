import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CabOptions from '../CabOptions/CabOptions';

const options= [
  { type: "OLA", value: "40", url: "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1459446250/xx0u5xwwzygivm67ogsk.jpg" },
  { type: "UBER", value: "40", url: "https://semaine-production.s3.amazonaws.com/products/product/image/6827/large_Uber-app.jpg" },
  { type: "Rapido", value: "40", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOLJJfUAbhh1JVtRLgNCexBH9_cC2L3NvqA&usqp=CAU" }
];

describe("CabOptions placeholder test", () => {
  it("Matches the snapshot", () => {
    const { container } = render(
      <CabOptions options={options} />
    );
    expect(container).toMatchSnapshot();
  });

  test("test CabOptions render", () => {
    const { getByTestId } = render(<CabOptions options={options} />);
    expect(getByTestId("cabOptions-placeholder")).toBeInTheDocument();
  });
});