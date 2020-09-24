import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchCats } from "./actions/catActions";

import CatList from "./CatList";

class App extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.cats} />
      </div>
    );
  }
}

export default connect(
  (state) => ({ cats: state.cats, loading: state.loading }),
  { fetchCats }
)(App);
