import React, { Component } from "react";
import styled from "styled-components";
import Preview from "./Components/Preview";
import Controls from "./Components/Controls";

class App extends Component {
  state = {
    constraints: {
      pinTop: false,
      pinBottom: false,
      pinLeft: false,
      pinRight: false,
      fixedWidth: false,
      fixedHeight: false
    }
  };

  handlePin = pinLocation => () => {
    const {
      pinTop,
      pinRight,
      pinBottom,
      pinLeft,
      fixedHeight,
      fixedWidth
    } = this.state;
    if (pinLocation === "pinTop" && pinBottom && fixedHeight) {
      this.setState(prevState => {
        const newConstraints = prevState.constraints;
        newConstraints.fixedHeight = false;
        return newConstraints;
      });
    }
    if (pinLocation === "pinBottom" && pinTop && fixedHeight) {
      this.setState(prevState => {
        const newConstraints = prevState.constraints;
        newConstraints.fixedHeight = false;
        return newConstraints;
      });
    }
    if (pinLocation === "pinRight" && pinLeft && fixedWidth) {
      this.setState(prevState => {
        const newConstraints = prevState.constraints;
        newConstraints.fixedWidth = false;
        return newConstraints;
      });
    }
    if (pinLocation === "pinLeft" && pinRight && fixedWidth) {
      this.setState(prevState => {
        const newConstraints = prevState.constraints;
        newConstraints.fixedWidth = false;
        return newConstraints;
      });
    }
    this.setState(prevState => {
      const newConstraints = prevState.constraints;
      newConstraints[pinLocation] = !prevState.constraints[pinLocation];
      return newConstraints;
    });
  };

  handleDimension = dimension => () => {
    const { pinTop, pinRight, pinBottom, pinLeft } = this.state;
    if (dimension === "fixedWidth" && pinRight && pinLeft) {
      return;
    }
    if (dimension === "fixedHeight" && pinTop && pinBottom) {
      return;
    }
    this.setState(prevState => {
      const newConstraints = prevState.constraints;
      newConstraints[dimension] = !prevState.constraints[dimension];
      return newConstraints;
    });
  };

  render() {
    const { constraints } = this.state;

    return (
      <StyledApp className="App">
        <h1>Bespoke UI</h1>
        <h2>Controls</h2>
        <Controls
          handlePin={this.handlePin}
          handleDimension={this.handleDimension}
          constraints={constraints}
        />
        <h2>Preview</h2>
        <Preview constraints={constraints} />
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  h2 {
    text-decoration: underline;
  }
`;

export default App;
