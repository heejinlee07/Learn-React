/* eslint-disable */

import React from "react";

const Child = (props) => {
  console.log(props.children);
  return (
    <div>
      <h1>자식컴포넌트</h1>
      {props.children}
      <br />
      {props.lotto.map((lo, i) => {
        return i === 6 ? (
          <span key={i}>{lo}</span>
        ) : (
          <span key={i}>{lo} + ","</span>
        );
      })}
    </div>
  );
};
export default Child;
