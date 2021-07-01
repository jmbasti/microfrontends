import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
import Progress from "./components/Progress";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  const [isSignedIn, setSignedIn] = useState(false);
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header isSignedIn={isSignedIn} onSignOut={() => setSignedIn(false)} />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route exact component={MarketingLazy} path="/" />
            <Route exact path="/auth">
              <AuthLazy onSignIn={() => setSignedIn(true)} />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
