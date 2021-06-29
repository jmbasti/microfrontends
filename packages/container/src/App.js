import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />
      {/* Auth SPA */}
      {/* Dashboard SPA */}
    </BrowserRouter>
  );
};

export default App;
