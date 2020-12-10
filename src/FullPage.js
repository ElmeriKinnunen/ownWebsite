import React from "react";
import { Pager } from "react-bootstrap";

import ReactPageScroller from 'react-page-scroller';

import "./index.css";
import Info from "./components/Info";
import Landing from "./components/Landing";
import Projects from "./components/Projects";

export default class FullPage extends React.Component {

  render() {

    return (
      <React.Fragment>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
        >
          <Landing />
          <Info />
          <Projects />
        </ReactPageScroller>
        <Pager className="pagination-additional-class" bsSize="large">
        </Pager>
      </React.Fragment>
    );
  }
}
