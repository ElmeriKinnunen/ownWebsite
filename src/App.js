import React from "react";
import "./index.css";
import Info from "./components/Info";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import LandingBanner from "./components/LandingBanner";

export default class App extends React.Component {

  render() {

    return (
      <React.Fragment>
          <Landing />
          <LandingBanner />
          <Info />
          <Projects />
      </React.Fragment>
    );
  }
}
