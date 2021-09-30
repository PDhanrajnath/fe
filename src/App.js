import "./App.css";
import theme from "./utils/theme/theme";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import StepPage from "./components/pages/StepPage";
import SavedJobs from "./components/pages/SavedJobsPage/SavedJobs";
import {withRouter} from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={withRouter(StepPage)} />
            <Route path="/findJobs" component={LandingPage} />
            <Route path="/savedJobs" component={SavedJobs} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
