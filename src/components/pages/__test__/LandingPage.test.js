import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingPage from "../LandingPage/index";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducer from "../../../state/reducer/rootReducer";
import { BrowserRouter } from "react-router-dom";

const store = createStore(rootReducer);

global.fetch = jest.fn(() =>
  Promise.resolve()
);

describe("LandingPage test", () => {  
    test("Test Landing Page render", () => {
      const { getByTestId } = render(<Provider store={store}><BrowserRouter><LandingPage /></BrowserRouter></Provider>);
      expect(getByTestId("landing-page")).toBeInTheDocument();
    });
  });
