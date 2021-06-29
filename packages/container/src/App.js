import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import MarketingApp from "./components/MarketingApp";
import Header from "./Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        {/* Marketing SPA */}
        <MarketingApp />
        {/* Auth SPA */}
        {/* Dashboard SPA */}
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
