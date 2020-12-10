import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import FullPage from "./FullPage";

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
        <Route exact path="/" component={FullPage} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root"),
);
