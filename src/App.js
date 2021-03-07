import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from "./components/landing";
import Payment from "./components/payment";
import Pricing from "./components/pricing";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Landing/></Route>
        <Route path="/pricing"><Pricing/></Route>
        <Route path="/payment"><Payment/></Route>
      </Switch>
    </Router>
  );
}

export default App;
