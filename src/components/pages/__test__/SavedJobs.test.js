import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../../state/reducer/rootReducer";
import "@testing-library/jest-dom/extend-expect";
import SavedJobs from "../SavedJobsPage/SavedJobs";
const store = createStore(rootReducer);
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => Promise.resolve());

describe("SavedJobs test", () => {
  test("Test Saved Jobs Page render", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          {" "}
          <SavedJobs />
        </BrowserRouter>
      </Provider>
    );
    const div = getByTestId("saved-jobs");
    expect(div).toHaveTextContent(
      "Green CommuteDashboardFind JobsSaved JobsPractice TestNeed Help?Contact UsSettings"
    );
    expect(getByTestId("saved-jobs")).toBeInTheDocument();
  });
});
