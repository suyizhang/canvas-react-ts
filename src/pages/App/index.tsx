import React from 'react';
import { Provider } from "mobx-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import Home from '../Home';
import CanvasLayout from '../CanvasLayout';

function App() {
  return (
    <Provider {...SuyiStore}>
      <BrowserRouter>
      <Switch>
        <Route path="/canvas" render={() => <CanvasLayout />} />
        <Route path="/" render={() => <Home />} />
      </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default hot(App);
