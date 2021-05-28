// import React, { useContext } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  // useParams
} from "react-router-dom";
import logger from "./logger";
import { WinstonProvider } from "winston-react";

import Header from "./header";
import Body from "./body";
// import { Context } from "./store";
import ErrorView from "./error";

const App = () => {
  // const [state] = useContext(Context);
  // const { applicationError } = state;
  const { applicationError } = {};
  // let { id } = useParams();

  return (
    <WinstonProvider logger={logger}>
      {applicationError && <ErrorView />}
      {!applicationError && (
        <Router>
          <Switch>
            <Route path="/">
              <>
                <Header />
                <Body />
              </>
            </Route>
            <Route path="*">
              <Redirect to={"/"} />
            </Route>
          </Switch>
        </Router>
      )}
    </WinstonProvider>
  );
};

export default App;
