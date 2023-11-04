import React, { Component } from "react";

export class App02 extends Component {
  render() {
    const greeting = "Hello C07, Welcome to Component Class";
    return <Headline value={greeting} name={"Teo Nguyen"}/>;
  }
}

class Headline extends Component {
  render() {
    return (
      <>
        <h2>{this.props.value}</h2>
        <h2>{this.props.name}</h2>
      </>
    );
  }
}

export default App02;
