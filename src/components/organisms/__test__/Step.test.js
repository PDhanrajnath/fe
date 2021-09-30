import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducer from "../../../state/reducer/rootReducer";
import Step from "../Step/Step";

const store = createStore(rootReducer);

global.fetch = jest.fn(() =>
  Promise.resolve()
);

describe("Step test", () => {  
    test("Test Step organism render", () => {
      const { getByTestId } = render(<Provider store={store}><Step page={3} /></Provider>);
      expect(getByTestId("step")).toBeInTheDocument();
    });
  });