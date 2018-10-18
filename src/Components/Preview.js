import React from "react";
import styled from "styled-components";

export default class Preview extends React.Component {
  state = {
    expanded: false
  };

  componentWillUnmount() {
    this.stopInterval();
  }

  startInterval = () => {
    this.interval = window.setInterval(() => {
      this.setState(state => ({
        expanded: !state.expanded
      }));
    }, 1000);
  };

  stopInterval = () => {
    if (this.interval) {
      window.clearInterval(this.interval);
      this.setState({ expanded: false });
    }
  };

  render() {
    return (
      <PreviewContainer
        onMouseEnter={this.startInterval}
        onMouseLeave={this.stopInterval}
      >
        <ElementContainer
          className={this.state.expanded ? "expanded" : null}
          constraints={this.props.constraints}
        >
          <Element
            className={this.state.expanded ? "expanded" : null}
            constraints={this.props.constraints}
          />
        </ElementContainer>
      </PreviewContainer>
    );
  }
}

const PreviewContainer = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  padding: 16px;
  background: #333;
  margin: 0 auto;
`;

const ElementContainer = styled.div`
  align-self: flex-start;
  display: inline-flex;
  min-width: 0;
  min-height: 0;
  padding: 16px;
  transition: all 500ms linear;
  background: #999;

  &.expanded {
    min-width: 100%;
    min-height: 100%;
    padding-top: ${({ constraints }) =>
      constraints.pinTop ? "16px" : "calc(40% - 16px)"};
    padding-right: ${({ constraints }) =>
      constraints.pinRight ? "16px" : "calc(40% - 16px)"};
    padding-bottom: ${({ constraints }) =>
      constraints.pinBottom ? "16px" : "calc(40% - 16px)"};
    padding-left: ${({ constraints }) =>
      constraints.pinLeft ? "16px" : "calc(40% - 16px)"};
  }
  ${({ constraints }) => {
    const {
      pinTop,
      pinRight,
      pinBottom,
      pinLeft,
      fixedHeight,
      fixedWidth
    } = constraints;

    if (
      !pinTop &&
      !pinBottom &&
      !pinLeft &&
      !pinRight &&
      fixedHeight &&
      fixedWidth
    ) {
      return "align-items: center; justify-content: center;";
    }
    if (
      !pinTop &&
      !pinBottom &&
      !pinLeft &&
      pinRight &&
      fixedHeight &&
      fixedWidth
    ) {
      return "align-items: center; justify-content: flex-end";
    }
    if (
      !pinTop &&
      pinBottom &&
      !pinLeft &&
      pinRight &&
      fixedHeight &&
      fixedWidth
    ) {
      return "align-items: flex-end; justify-content: flex-end";
    }
    if (
      pinTop &&
      !pinBottom &&
      !pinLeft &&
      pinRight &&
      fixedHeight &&
      fixedWidth
    ) {
      return "align-items: flex-start; justify-content: flex-end";
    }
    if (
      pinTop &&
      !pinBottom &&
      !pinLeft &&
      !pinRight &&
      fixedHeight &&
      fixedWidth
    ) {
      return "align-items: flex-start; justify-content: center";
    }
    if (
      !pinTop &&
      pinBottom &&
      !pinLeft &&
      !pinRight &&
      fixedHeight &&
      fixedWidth
    ) {
      return "align-items: flex-end; justify-content: center";
    }

    if (pinTop && pinRight && fixedWidth) {
      return "justify-content: flex-end;";
    }
    if (pinBottom && pinRight && fixedWidth) {
      return "justify-content: flex-end;";
    }
    if (pinBottom && pinTop && pinLeft && fixedWidth) {
      return "justify-content: flex-start;";
    }
    if (!pinTop && !pinBottom && !pinLeft && pinRight && fixedWidth) {
      return "justify-content: flex-end;";
    }
    if (pinTop && pinBottom && !pinLeft && !pinRight && fixedWidth) {
      return "justify-content: center;";
    }
    if (!pinTop && !pinBottom && !pinLeft && !pinRight && fixedWidth) {
      return "justify-content: center;";
    }
    if (!pinTop && !pinBottom && !pinLeft && !pinRight && fixedHeight) {
      return "align-items: center;";
    }
    if (pinTop && !pinBottom && !pinLeft && !pinRight && fixedHeight) {
      return "align-items: flex-start;";
    }
    if (!pinTop && !pinBottom && !pinLeft && pinRight && fixedHeight) {
      return "align-items: center;";
    }
    if (!pinTop && pinBottom && !pinLeft && !pinRight && fixedHeight) {
      return "align-items: flex-end;";
    }
    if (!pinTop && !pinBottom && pinLeft && !pinRight && fixedHeight) {
      return "align-items: center;";
    }
    if (!pinTop && pinBottom && pinLeft && !pinRight && fixedHeight) {
      return "align-items: flex-end;";
    }
    if (!pinTop && pinBottom && !pinLeft && pinRight && fixedHeight) {
      return "align-items: flex-end;";
    }
    if (!pinTop && pinBottom && pinLeft && pinRight && fixedHeight) {
      return "align-items: flex-end;";
    }
    if (pinTop && !pinBottom && !pinLeft && pinRight && fixedHeight) {
      return "align-items: flex-start;";
    }
    if (pinTop && !pinBottom && pinLeft && !pinRight && fixedHeight) {
      return "align-items: flex-start;";
    }
    if (pinTop && !pinBottom && pinLeft && pinRight && fixedHeight) {
      return "align-items: flex-start;";
    }
    if (!pinTop && !pinBottom && pinLeft && pinRight && fixedHeight) {
      return "align-items: center;";
    }
  }};
`;

const Element = styled.div`
  background: limegreen;
  min-width: 16px;
  min-height: 16px;
  width: 16px;
  transition: all 500ms linear;

  &.expanded {
    width: 100%;
    ${({ constraints }) => constraints.fixedWidth && "width: 16px;"};
    ${({ constraints }) => constraints.fixedHeight && "height: 16px;"};
  }
`;
