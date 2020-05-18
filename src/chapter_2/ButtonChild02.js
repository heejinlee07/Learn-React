import React, { Component } from "react";

const ButtonStyle = {
  border: "none",
  width: 100,
  height: 30,
  background: "yellow",
};

const ButtonChild02 = ({ title }) => (
  <button style={ButtonStyle}>{title}</button>
);

export default ButtonChild02;
