import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Menu from "./components/menu";
import Page1 from "./components/Page1/page1";
import Page2 from "./components/Page2/page2";
import Page3 from "./components/Page3/page3";
import Footer from "./components/footer";
function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/page3">
          <Page3 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
        <Route path="/">
          <Page1 />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
