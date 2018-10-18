import React, { Component } from "react";
import styled from "styled-components";

export default class Controls extends Component {
  render() {
    const { handlePin, handleDimension, constraints } = this.props;
    return (
      <ControlsWrapper>
        <ControlWrapper>
          <h3>Pin-to-Edge</h3>
          <ControlContainer>
            <Control>
              <Arrow
                constraints={constraints}
                className="top"
                onClick={handlePin("pinTop")}
              />
              <Arrow
                constraints={constraints}
                className="right"
                onClick={handlePin("pinRight")}
              />
              <Arrow
                constraints={constraints}
                className="bottom"
                onClick={handlePin("pinBottom")}
              />
              <Arrow
                constraints={constraints}
                className="left"
                onClick={handlePin("pinLeft")}
              />
            </Control>
          </ControlContainer>
        </ControlWrapper>
        <ControlWrapper>
          <h3>Fix Dimensions</h3>
          <ControlContainer>
            <Control>
              <DimensionArrow
                constraints={constraints}
                className="top"
                onClick={handleDimension("fixedHeight")}
              />
              <DimensionArrow
                constraints={constraints}
                className="right"
                onClick={handleDimension("fixedWidth")}
              />
              <DimensionArrow
                constraints={constraints}
                className="bottom"
                onClick={handleDimension("fixedHeight")}
              />
              <DimensionArrow
                constraints={constraints}
                className="left"
                onClick={handleDimension("fixedWidth")}
              />
            </Control>
          </ControlContainer>
        </ControlWrapper>
      </ControlsWrapper>
    );
  }
}

const ControlsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ControlContainer = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  padding: 16px;
  background: #333;
  margin: 20px;
  color: white;
  text-align: center;
`;

const Control = styled.div`
  min-width: 100%;
  min-height: 100%;
  background: #999;
  position: relative;
`;

const Arrow = styled.div`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 10px;
  position: absolute;
  margin: 3px;

  &.top {
    transform: rotate(-135deg);
    top: 10px;
    right: calc(50% - 10px);
    border-color: ${({ constraints }) =>
      constraints.pinTop ? "limegreen" : "black"};
  }

  &.right {
    transform: rotate(-45deg);
    right: 10px;
    top: calc(50% - 10px);
    border-color: ${({ constraints }) =>
      constraints.pinRight ? "limegreen" : "black"};
  }

  &.bottom {
    transform: rotate(45deg);
    bottom: 10px;
    right: calc(50% - 10px);
    border-color: ${({ constraints }) =>
      constraints.pinBottom ? "limegreen" : "black"};
  }

  &.left {
    transform: rotate(135deg);
    left: 10px;
    top: calc(50% - 10px);
    border-color: ${({ constraints }) =>
      constraints.pinLeft ? "limegreen" : "black"};
  }

  &:hover {
    cursor: pointer;
  }
`;

const DimensionArrow = styled.div`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 10px;
  position: absolute;
  margin: 3px;

  &.top {
    transform: rotate(-135deg);
    top: 10px;
    right: calc(50% - 10px);
    border-color: ${({ constraints }) =>
      constraints.fixedHeight ? "limegreen" : "black"};
  }


  &.right {
    transform: rotate(-45deg);
    right: 10px;
    top: calc(50% - 10px);
    border-color: ${({ constraints }) =>
      constraints.fixedWidth ? "limegreen" : "black"};
  }

  &.bottom {
    transform: rotate(45deg);
    bottom: 10px;
    right: calc(50% - 10px);
    border-color: ${({ constraints }) =>
      constraints.fixedHeight ? "limegreen" : "black"};
  }

  &.left {
    transform: rotate(135deg);
    left: 10px;
    top: calc(50% - 10px);
    border-color: ${({ constraints }) =>
      constraints.fixedWidth ? "limegreen" : "black"};
  }

  &:hover {
    cursor: pointer;
  }

    &::before {
      content: ""
      width: 1px;
      height: 20px;
      color: black
  }
`;
