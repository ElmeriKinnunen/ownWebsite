import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";

class index extends React.Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root"),
);
