import theme from "../src/utils/theme/theme";
import { ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "../src/state/store";
import { BrowserRouter } from "react-router-dom";

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  ),
];
